const express = require("express");

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");

const passport = require("passport");

// require("./models/User");
require("./services/passport");


const app = express();


app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
/// first route!
app.get("/", (res, req) => {
	req.send("<h1>hello world</h1>");
});

// Local and heroku posts
const PORT = process.env.PORT || 5000;
app.listen(PORT);
