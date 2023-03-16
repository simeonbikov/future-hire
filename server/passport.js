const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
// require("./passport");

passport.use(
	new GithubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "/api/github/callback",
			// scope: ["profile", "email"], //
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
			// console.log(JSON.stringify(profile));
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
