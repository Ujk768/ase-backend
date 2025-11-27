import mongoose, { Schema, Document } from "mongoose";

type Role = {
  name: string;
  averageSalary: number;
};

type AdmissionRequirements = {
  gpa: number;
  others: string[];
};

type coursesOffered = {
  courseName: string;
  semester: number;
  credits: number;
  courseType :  "Core" | "Elective";
}

type Programs = {
  programName: string;
  degreeType: string;
  programDuration: string;
  numberOfSemesters: number;
  tuition: number;
  generalCosts: number;
  futureRoles: string[];
  averageSalaryExpectations: Role[];
  courses: coursesOffered[];
  admissionRequirements: AdmissionRequirements[];
  redditReviews: string[];
  userRating: number;
};

export interface IUniversitySchema extends Document {
  universityName: string;
  qsWorldRanking: number;
  location: string;
  websiteUrl: string;
  contactInformation: string[];
  overallScore: number;
  programsOffered: Programs[];
}

const universitySchema = new Schema<IUniversitySchema>({
  universityName: { type: String, required: true },
  qsWorldRanking: { type: Number, required: true },
  location: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  contactInformation: { type: [String], required: true },
  overallScore: { type: Number, required: true },
  programsOffered: { type: [Object], required: true },
})

const universityDb = mongoose.connection.useDb("universityDB");
export const University = universityDb.model("University", universitySchema);