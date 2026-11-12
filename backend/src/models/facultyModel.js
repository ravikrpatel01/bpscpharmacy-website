import db from "../config/db.js";

export const getAllFaculties = async () => {
  const [rows] = await db.query("SELECT * FROM faculties ORDER BY id ASC");

  return rows;
};

export const getFacultyById = async (id) => {
  const [rows] = await db.query("SELECT * FROM faculties WHERE id=?", [id]);

  return rows[0];
};

export const createFaculty = async (faculty) => {
  const { name, designation, degrees, experience, image_path } = faculty;

  const [result] = await db.query(
    `INSERT INTO faculties
    (name, designation, degrees, experience, image_path)
    VALUES (?, ?, ?, ?, ?)`,
    [name, designation, degrees, experience, image_path],
  );

  return result;
};

export const updateFaculty = async (id, faculty) => {
  const { name, designation, degrees, experience, image_path } = faculty;

  const [result] = await db.query(
    `UPDATE faculties
     SET
        name=?,
        designation=?,
        degrees=?,
        experience=?,
        image_path=?
     WHERE id=?`,
    [name, designation, degrees, experience, image_path, id],
  );

  return result;
};

export const deleteFaculty = async (id) => {
  const [result] = await db.query("DELETE FROM faculties WHERE id=?", [id]);

  return result;
};
