const passport = require("passport");

module.exports = (app) => {
	// Google Auth route
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	// retrieve user clientInformation
	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
