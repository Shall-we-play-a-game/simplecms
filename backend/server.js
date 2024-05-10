const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simplecms",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching data" });
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const {
    name,
    email,
    dateOfBirth = new Date().toISOString().split("T")[0],
    phone,
  } = req.body.formData;

  const sql =
    "INSERT INTO user (`Name`, `Email`, `DateOfBirth`, `phoneno`) VALUES (?, ?, ?, ?)";
  const values = [name, email, dateOfBirth, phone];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
    return res.json({ message: "User created successfully", data });
  });
});

app.put("/update/:id", (req, res) => {
  const {
    name,
    email,
    dateOfBirth = new Date().toISOString().split("T")[0],
    phone,
  } = req.body.formData;

  const sql =
    "UPDATE user SET `Name` = ?, `Email` = ?, `DateOfBirth` = ?, `phoneno` = ? where ID = ?";
  const values = [name, email, dateOfBirth, phone];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
    return res.json({ message: "User created successfully", data });
  });
});

app.delete("/user/:id", (req, res) => {
  const sql = "DELETE FROM user WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
    return res.json({ message: "User Deleted successfully" });
  });
});

app.listen(8080, (req, res) => {
  console.log("listning on port 8080");
});
