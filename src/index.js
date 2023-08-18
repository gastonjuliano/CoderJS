const fs = require("fs");
const path = require("path");
const express = require("express");

// write a simple express app to serve the static files
const app = express();
app.use(express.static("."));
app.get("/", (req, res) => {
	return res.sendFile(path.join(__dirname.replace("src", ""), "/index.html"));
});
app.get("/images", (req, res) => {
	const dirname = path.join(__dirname.replace("src", ""), "/images");
	console.log(dirname);
	fs.readdir(dirname, (err, files) => {
		if (err) {
			return res.status(500).send("Error on the server.");
		}
		return res.send(files);
	});
});
app.listen(3000, () => console.log("listening on port 3000"));
