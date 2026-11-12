import cors from "cors";
import "dotenv/config";
import express from "express";
import "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import facultyRouter from "./routes/facultyRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running Successfully 🚀",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/faculties", facultyRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
