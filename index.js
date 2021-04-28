const express = require('express');
const app = express();


/// first route!
app.get("/", (res, req) => {
	req.send("<h1>hello world</h1>");
});


// Local and heroku posts
const PORT = process.env.PORT || 5000;
app.listen(PORT);
