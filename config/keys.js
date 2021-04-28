if (process.env.NODE_ENV === "production") {
	// return the prod keys
	module.exports = require("./prod");
} else {
	//return dev keys
	module.exports = require("./dev");
}
