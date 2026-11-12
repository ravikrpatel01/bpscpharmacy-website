import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAdmin, getAdminByEmail } from "../models/adminModel.js";

const createAdminAsync = (name, email, password) => {
  return new Promise((resolve, reject) => {
    createAdmin(name, email, password, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Missing details" });
  }

  try {
    const existingAdmin = await new Promise((resolve, reject) => {
      getAdminByEmail(email, (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
    });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists with Email: " + email,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await createAdminAsync(name, email, hashedPassword);

    const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "ADMIN registered successfully!",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("1️⃣ Login function started");
  console.log("2️⃣ Email received:", email);
  console.log("3️⃣ Password received:", password ? "YES" : "NO");

  if (!email || !password) {
    console.log("❌ Validation failed");

    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  console.log("4️⃣ Validation passed");

  try {
    // --------------------------------
    // DATABASE QUERY
    // --------------------------------
    console.log("5️⃣ Before database query");

    const existingAdmin = await new Promise((resolve, reject) => {
      getAdminByEmail(email, (err, user) => {
        console.log("6️⃣ getAdminByEmail callback executed");

        if (err) {
          console.log("❌ Database error:", err);
          reject(err);
        } else {
          console.log(
            "7️⃣ Database query completed. User found:",
            user ? "YES" : "NO",
          );

          resolve(user);
        }
      });
    });

    console.log("8️⃣ After database query");

    // --------------------------------
    // CHECK USER
    // --------------------------------
    if (!existingAdmin) {
      console.log("❌ Admin not found");

      return res.status(400).json({
        success: false,
        message: "Invalid Email ID!",
      });
    }

    console.log("9️⃣ Admin found:", existingAdmin.email);

    // --------------------------------
    // PASSWORD CHECK
    // --------------------------------
    console.log("🔟 Before password comparison");

    const isMatched = await bcrypt.compare(password, existingAdmin.password);

    console.log("1️⃣1️⃣ Password comparison completed");
    console.log("Password matched:", isMatched);

    if (!isMatched) {
      console.log("❌ Password does not match");

      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    console.log("1️⃣2️⃣ Password matched successfully");

    // --------------------------------
    // JWT TOKEN
    // --------------------------------
    console.log("1️⃣3️⃣ Before JWT generation");

    const token = jwt.sign({ id: existingAdmin.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("1️⃣4️⃣ JWT generated successfully");

    // --------------------------------
    // COOKIE
    // --------------------------------
    console.log("1️⃣5️⃣ Setting cookie");

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log("1️⃣6️⃣ Cookie set");

    // --------------------------------
    // RESPONSE
    // --------------------------------
    console.log("1️⃣7️⃣ Sending successful response");

    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      userId: existingAdmin.id,
      token: token,
    });

    console.log("1️⃣8️⃣ Login completed successfully");
  } catch (error) {
    console.error("❌ Login error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.status(200).json({
      success: true,
      message: "ADMIN logged out successfully!",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid token" });
      }

      res.status(200).json({
        success: true,
        message: "Authenticated",
        userId: decoded.id,
      });
    });
  } catch (error) {
    console.error("CheckAuth error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
