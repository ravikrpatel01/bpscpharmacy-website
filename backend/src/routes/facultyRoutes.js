import express from "express";
import {
  getAllFaculties,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from "../controllers/facultyController.js";

const facultyRouter = express.Router();

facultyRouter.get("/", getAllFaculties);
facultyRouter.get("/:id", getFacultyById);
facultyRouter.post("/", createFaculty);
facultyRouter.put("/:id", updateFaculty);
facultyRouter.delete("/:id", deleteFaculty);

export default facultyRouter;
