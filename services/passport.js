const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");


/// authenticate users with google
// Tell passport to use GoogleStartegy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			
		},
		async (accessToken, refreshToken, profile, done) => {
			

			console.log("accessToken:", accessToken);
			console.log("refreshToken:", refreshToken);
			console.log("profile:", profile);
		}
	)
);
