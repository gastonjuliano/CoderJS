const fs = require("fs");
const path = require("path");
const express = require("express");
const { default: axios } = require("axios");

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
app.get("/blizzData", async (req, res) => {
	const blizz_data = await axios.get(
		"https://us.shop.battle.net/api/browsing/family/world-of-warcraft?locale=es-es"
	);
	const data = await blizz_data.data;
	const mountCards = data.browsingCardGroups.filter(
		(c) => c.id === "mounts"
	)[0];

	const response = await axios.get(
		`https://us.shop.battle.net/api/card-collection?id=${mountCards.cardIds.join(
			","
		)}&locale=es-es`
	);
	const cards = response.data;

	res.status(200).send(cards);
});
app.listen(3000, () => console.log("listening on port 3000"));
