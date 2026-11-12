import * as facultyModel from "../models/facultyModel.js";

export const getAllFaculties = async (req, res) => {
  try {
    const faculties = await facultyModel.getAllFaculties();

    res.status(200).json(faculties);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getFacultyById = async (req, res) => {
  try {
    const faculty = await facultyModel.getFacultyById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const createFaculty = async (req, res) => {
  try {
    const result = await facultyModel.createFaculty(req.body);

    res.status(201).json({
      success: true,
      message: "Faculty added successfully",
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    await facultyModel.updateFaculty(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Faculty updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    await facultyModel.deleteFaculty(req.params.id);

    res.status(200).json({
      success: true,
      message: "Faculty deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
