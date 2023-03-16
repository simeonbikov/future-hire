import express from "express";

import apiRouter from "./api";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const app = express();


//=============a
const session = require("express-session");
// const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
require("./passport");

//=============

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());


//=============a
// app.use(
// 	cookieSession({ name: "session", keys: ["KEY123"], maxAge: 24 * 60 * 60 * 100 })
// );

app.use(
	session({
		secret: "secret123",
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			maxAge: 24 * 60 * 60 * 1000,
		},
	})
);

app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

//=============


if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
