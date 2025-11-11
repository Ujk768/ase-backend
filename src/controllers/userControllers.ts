import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Fetched users successfully!",
    data: [{ id: 1, name: "Utkarsh Kanade" }]
  });
};
