import { Request, Response } from "express";
import { University } from "../models/University";

export const getRecommendations = async (req: Request, res: Response) => {
  try {
    const { sortBy } = req.body; // "budget" | "prestige" | "rating"

    // Get all universities with programs
    const universities = await University.find();

    // Flatten all programs from all universities
    const allPrograms = universities.flatMap(uni =>
      uni.programsOffered.map(program => ({
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

    // Sort based on preference
    let sortedPrograms = [...allPrograms];

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