import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";
const cors = require("cors");

const router = Router();
router.use(cors({
    accessControlAllowOrigin: "*",
}));
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// GET "/students"
router.get("/students", async (_, res) => {
	const query = "SELECT * FROM students";
	try {
		const students = await db.query(query);
		res.json(students.rows);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET "/students/{id}"
router.get("/students/:id", async (req, res) => {
	const studentId = parseInt(req.params.id);
	const query = "SELECT * FROM students WHERE id = $1";
	try {
		const student = await db.query(query, [studentId]);
		if (student.rows.length <= 0) {
			res.sendStatus(404);
		}
		res.json(student.rows);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
