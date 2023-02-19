import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// GET "/graduates"
router.get("/graduates", async (_, res) => {
	const query = "SELECT * FROM graduates";
	try {
		const graduates = await db.query(query);
		res.json(graduates.rows);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET "/graduates/{id}"
router.get("/graduates/:id", async (req, res) => {
	const graduateId = parseInt(req.params.id);
	const query = "SELECT * FROM graduates WHERE id = $1";
	try {
		const graduate = await db.query(query, [graduateId]);
		if (graduate.rows.length <= 0) {
			res.sendStatus(404);
		}
		res.json(graduate.rows);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
