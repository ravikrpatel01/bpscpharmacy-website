import dotenv from "dotenv";
import fs from "fs";
import mysql from "mysql2";

dotenv.config();

const tableSchemas = JSON.parse(
  fs.readFileSync("./src/config/tables.json", "utf-8"),
);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  timezone: "+05:30",
  dateStrings: true,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Database initialization
(async () => {
  try {
    // Promise version only for initialization
    const connection = await pool.promise().getConnection();

    console.log("✅ Connected to MySQL database!");

    for (const [tableName, createQuery] of Object.entries(tableSchemas)) {
      await connection.query(createQuery);
      console.log(`✅ ${tableName} table ready!`);
    }

    connection.release();
  } catch (err) {
    console.error("❌ Database initialization error:", err);
  }
})();

export default pool;
