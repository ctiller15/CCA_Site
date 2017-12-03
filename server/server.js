const express = require("express");
var app = express();

// For the home page
app.get("/", (req, res) => {
	res.send("This is the home page!");
});

app.get("/Programs", (req, res) => {
	res.send("This is the Programs page!");
});

app.get("/Officers", (req, res) => {
	res.send("This is the Officers page!");
});

app.get("/Store", (req, res) => {
	res.send("This is the Store!");
});

app.get("/Contact", (req, res) => {
	res.send("This is the contact page!");
});

app.get("*", (req, res) => {
	res.send("Page not found.");
});


app.listen(3000, () => {
	console.log("started on port 3000!");
});