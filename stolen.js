const cleanData = () => {};

setTimeout(() => {
	const blizzCardEl = document.getElementById("blizz_cards");
	fetch("http://localhost:3000/blizzData", {
		method: "GET",
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			const div = document.createElement("div");
			// TODO: Parse data and get the card ids.
			// Fetch to `https://us.shop.battle.net/api/card-collection?id=${__id__}&locale=es-es`
			div.innerHTML = JSON.stringify(res);

			blizzCardEl.appendChild(div);
		})
		.catch((err) => {
			console.log(err);
		});
}, 10 * 1000);
