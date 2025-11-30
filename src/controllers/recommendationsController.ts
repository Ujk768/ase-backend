import { Request, Response } from "express";
import { IUniversitySchema, University } from "../models/University";
import { findDataBySearchQuery } from "./universityControllers";

export const getRecommendations = async (req: Request, res: Response) => {
  try {
    const { sortBy, query } = req.body; // "budget" | "prestige" | "rating"

    // Get all universities with programs
    // const universities = await University.find();
    const searchQuery = new RegExp(query, "i");
    const universities: IUniversitySchema[] = await University.aggregate([
      {
        $match: {
          // Match documents where EITHER the universityName OR any programName contains the query.
          $or: [
            { universityName: { $regex: searchQuery } },
            { "programsOffered.programName": { $regex: searchQuery } },
          ],
        },
      },
      {
        $project: {
          _id: 0, // Exclude the document ID
          universityName: 1,
          location: 1,
          qsWorldRanking: 1,
          overallScore: 1,
          // Filter the programsOffered array to only include programs that match the query
          programsOffered: {
            $filter: {
              input: "$programsOffered",
              as: "program",
              cond: {
                $regexMatch: {
                  input: "$$program.programName",
                  regex: searchQuery,
                },
              },
            },
          },
          // Include the original programsOffered array if the university name matched.
          // This complex logic is to ensure the output is concise.
          originalPrograms: "$programsOffered",
        },
      },
      // Post-process to structure the result
      {
        $project: {
          universityName: 1,
          location: 1,
          qsWorldRanking: 1,
          overallScore: 1,
          // If the filtered list of programs is empty, use the full list
          // (which means the university name was the one that matched the query).
          // Otherwise, use the filtered list of programs.
          programsOffered: {
            $cond: {
              if: { $eq: [{ $size: "$programsOffered" }, 0] },
              then: "$originalPrograms", // University name matched, return all programs
              else: "$programsOffered", // Program name matched, return only matching programs
            },
          },
        },
      },
    ]);

    console.log("Universities", universities);

    // // Flatten all programs from all universities
    const allPrograms = universities.map((uni) =>
      uni.programsOffered.map((program) => ({
        programName: program.programName,
        degreeType: program.degreeType,
        programDuration: program.programDuration,
        numberOfSemesters: program.numberOfSemesters,
        tuition: program.tuition,
        generalCosts: program.generalCosts,
        futureRoles: program.futureRoles,
        averageSalaryExpectations: program.averageSalaryExpectations,
        courses: program.courses,
        admissionRequirements: program.admissionRequirements,
        redditReviews: program.redditReviews,
        userRating: program.userRating || 5, // Default to 5 if not set (Included it just in case Dataentry becomes tedious (Ming and Meet), Will delete this comment later.)
        // University info
        universityName: uni.universityName,
        qsWorldRanking: uni.qsWorldRanking,
        location: uni.location,
        websiteUrl: uni.websiteUrl,
        overallScore: uni.overallScore,
      }))
    );

    console.log("All Programs", allPrograms);

    const flatPrograms = allPrograms.flat();

    // Sort based on preference
    let sortedPrograms = [...flatPrograms];

    switch (sortBy) {
      case "budget":
        // Cheapest first
        sortedPrograms.sort((a, b) => a.tuition - b.tuition);
        break;

      case "prestige":
        // Best ranking first (lower number = better)
        sortedPrograms.sort((a, b) => a.qsWorldRanking - b.qsWorldRanking);
        break;

      case "rating":
        // Highest rating first
        sortedPrograms.sort((a, b) => b.userRating - a.userRating);
        break;

      default:
        // Default: sort by prestige
        sortedPrograms.sort((a, b) => a.qsWorldRanking - b.qsWorldRanking);
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: `Programs sorted by ${sortBy || "prestige"}`,
      sortBy: sortBy || "prestige",
      data: sortedPrograms,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
