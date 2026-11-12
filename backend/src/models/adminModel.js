import db from "../config/db.js";

export const createAdmin = (name, email, password, callback) => {
  const sql = "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

export const getAdminByEmail = (email, callback) => {
  console.log("🔵 getAdminByEmail() called");
  console.log("📧 Email sent to database:", email);

  const sql = "SELECT * FROM admin WHERE email = ?";

  console.log("🔵 About to execute db.query()");

  db.query(sql, [email], (err, results) => {
    console.log("🟢 db.query() callback executed");

    if (err) {
      console.error("❌ Database query error:", err);
      return callback(err, null);
    }

    console.log("🟢 Query successful");
    console.log("📊 Number of rows:", results.length);

    callback(null, results[0]);
  });

  console.log("🟡 db.query() called");
};

export const getAdminByUsername = (username, callback) => {
  const sql = "SELECT * FROM admin WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

export const getAdminProfileDetails = (callback) => {
  const sql = "SELECT * from admin";
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

export const updateAdminProfileDetails = (data, callback) => {
  const fields = [];
  const values = [];

  const addField = (fieldName, value) => {
    if (value !== undefined && value !== null) {
      fields.push(`${fieldName} = ?`);
      values.push(value);
    }
  };

  addField("email", data.email);
  addField("mobile", data.mobile);
  addField("role", data.userRole);
  addField("first_name", data.firstName);
  addField("last_name", data.lastName);
  addField("date_of_birth", data.dateOfBirth);
  addField("country", data.country);
  addField("state", data.state);
  addField("city", data.city);
  addField("postal_code", data.postalCode);
  addField("profile_pic_path", data.profilePicPath);
  addField("reg_no", data.regNo);
  addField("brand_name", data.brandName);

  addField("logo_image", data.logoImage);
  addField("logo_icon_image", data.logoIconImage); // <-- Added this

  addField("primary_color", data.primaryColor);
  addField("secondary_color", data.secondaryColor);

  if (fields.length === 0) {
    return callback(null, { affectedRows: 0 });
  }

  const query = `UPDATE admin SET ${fields.join(", ")} WHERE id = 1`;

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("DB Update Error:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

export const updateAdminPassword = (hashedPassword, callback) => {
  const sql = "UPDATE admin SET password = ? WHERE id = 1";

  db.query(sql, [hashedPassword], (err, result) => {
    if (err) {
      console.error("DB Password Update Error:", err);
      return callback(err, null);
    }

    callback(null, result);
  });
};
