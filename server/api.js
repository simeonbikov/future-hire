import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";

const router = Router();

// router.use(function (req, res, next) {
// 	res.header("Cross-Origin-Embedder-Policy", "require-corp");
// 	res.header("Cross-Origin-Opener-Policy", "same-origin");
// 	next();
// });

router.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	res.setHeader("Cross-origin-Embedder-Policy", "require-corp");
	res.setHeader("Cross-origin-Opener-Policy", "same-origin");

	if (req.method === "OPTIONS") {
		res.sendStatus(200);
	} else {
		next();
	}
});

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

// Add a new graduate
router.post("/graduate/register", async (req, res) => {
	let profilePicture_url = req.body.profilePicture_url;
	let full_name = req.body.full_name;
	let cohort = req.body.cohort;
	let professional_interest = req.body.professional_interest;
	let cv_link = req.body.cv_link;
	let linkedIn_url = req.body.linkedIn_url;
	let gitHub_url = req.body.gitHub_url;
	let summary = req.body.summary;
	let experience = req.body.experience;
	let skills = req.body.skills;


	// validation
	if (
		!profilePicture_url ||
		!full_name ||
		!cohort ||
		!professional_interest ||
		!cv_link ||
		!linkedIn_url ||
		!gitHub_url ||
		!summary ||
		!experience ||
		!skills.length === 0
	) {
		return res.status(400).json("Please input the required fields");
	} else {
			const query =
				"INSERT INTO graduates (full_name, cohort,passing_year,professional_interest,photo_url,portfolio_link,details,gitHub_link,linkedIn_link,experience) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";

			const values = [
				full_name,
				cohort,
				2023,
				professional_interest,
				profilePicture_url,
				cv_link,
				summary,
				gitHub_url,
				linkedIn_url,
				experience,
			];

		db.query(query, values, (err, result) => {

			if (err) {
				console.error(err.stack);
				res.status(500).json(err);
			} else {
				//if inserted in graduate table
				const query_skill = "INSERT INTO GRADUATE_SKILLS (graduate_id, skills_id) VALUES ($1, $2)";

				skills.forEach((skill) => {
					db.query(query_skill, [result.rows[0].id, skill]).catch((error) => {
						console.error(error);
						res.status(500).json(error);
					});
				});
				res.status(200).json("Thankyou for registering.");
			}
		});
	}
});