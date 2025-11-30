import { Request, Response } from "express";
import { University } from "../models/University";
import { stat } from "fs";

export const getAllUniversities = async (req: Request, res: Response) => {
  const data = await University.find();
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Fetched universities successfully!",
    data,
  });
};

export const findUniveristyByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const uni = await University.findOne({ universityName: name });
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: `Searched for university with name: ${name}`,
      data: uni,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const compareUniversities = (req: Request, res: Response) => {
  const { uni1, uni2 } = req.body;
  res.status(200).json({
    success: true,
    message: `Compared universities: ${uni1} and ${uni2}`,
    data: {
      university1: { id: 1, name: uni1, ranking: 1 },
    },
  });
};

export const findDataBySearchQuery = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== "string" || query.trim() === "") {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "A search 'query' string is required in the request body.",
      });
    }

    const searchQuery = new RegExp(query, "i"); // Create a case-insensitive regular expression

    // Use MongoDB Aggregation to perform a versatile search
    const results = await University.aggregate([
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

    if (results.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: `No university or program found matching: ${query}`,
        data: [],
      });
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: `Search results for query: ${query}`,
      data: results,
    });
  } catch (error) {
    console.error("Error executing search query:", error);
    res.status(500).json({
      statusCode: 500,
      success: false,
      message: "An internal server error occurred.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
