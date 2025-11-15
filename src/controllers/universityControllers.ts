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
