const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool.connect();

// GET "/students"
app.get("/students", (req, res) => {
  const query = "SELECT * FROM students";
  pool
    .query(query)
    .then((students) => res.json(students.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

// GET "/{id}"
app.get("/students/:id", (req, res) => {
  const requestedStudentId = parseInt(req.params.id);
  if (!requestedStudentId) {
    res.sendStatus(404);
    return;
  }
  const query = "SELECT * FROM students WHERE id=$1";
  pool
    .query(query, [requestedStudentId])
    .then((student) => res.json(student.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));