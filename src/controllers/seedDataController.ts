import {Request, Response} from "express";
import { University } from "../models/University";
import {dummyData} from "../dummyData";

export const seedDataController = async (req: Request, res: Response) => {
    try{
        await University.insertMany(dummyData);
        console.log("Data seeded successfully");
        res.status(200).json({
            success: true,
            data: dummyData,
            message: "Data seeded successfully",
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to seed data",
            error: error instanceof Error ? error.message : String(error),
        });
    }
}