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
	const query =
		"SELECT id, g.experience, g.full_name, g.cohort, g.passing_year, g.mobile, g.professional_interest, g.gender, g.photo_url, g.details, g.github_link, g.linkedin_link, g.portfolio_link, g.hired, g.experience AS experience, full_name, cohort, passing_year, mobile, professional_interest, gender, photo_url, details, github_link, linkedin_link, portfolio_link, hired, experience, s.skills_array FROM graduates g INNER JOIN (SELECT gs.graduate_id AS id, array_agg(s.skill) AS skills_array FROM graduate_skills gs INNER JOIN skills s ON s.id = gs.skills_id GROUP BY gs.graduate_id) s USING (id) ORDER BY id";
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
	const query =
		"SELECT id, g.experience, g.full_name, g.cohort, g.passing_year, g.mobile, g.professional_interest, g.gender, g.photo_url, g.details, g.github_link, g.linkedin_link, g.portfolio_link, g.hired, g.experience AS experience, full_name, cohort, passing_year, mobile, professional_interest, gender, photo_url, details, github_link, linkedin_link, portfolio_link, hired, experience, s.skills_array FROM graduates g INNER JOIN (SELECT gs.graduate_id AS id, array_agg(s.skill) AS skills_array FROM graduate_skills gs INNER JOIN skills s ON s.id = gs.skills_id GROUP BY gs.graduate_id) s USING (id) WHERE id=$1";
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

// GET "/skills"
router.get("/skills", async (_, res) => {
	const query = "SELECT id,skill FROM skills";
	try {
		const skills = await db.query(query);
		res.json(skills.rows);
	} catch (error) {
		res.status(500).json(error);
	}
});