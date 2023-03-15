const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");


const GITHUB_CLIENT_ID = "8ce102b6c8388ec1e972";
const GITHUB_CLIENT_SECRET = "1903eb5c4447128b4e09ca7acf29a1ca48a84c1f";

passport.use(
	new GithubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: "/api/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
