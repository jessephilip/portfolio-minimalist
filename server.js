// import express
const express = require ("express");

// set up express
const app = express();

// import path
const path = require ("path");

// serve static files
app.use(express.static("assets"));

// routes
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/portfolio.html"));
});

// set up port
const PORT = 3001 || process.env.PORT;

// run server
app.listen(PORT, () => {
	console.log("Portfolio listening on port " + PORT);
});
