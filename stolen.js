const cleanData = () => {};

setTimeout(() => {
	const blizzCardEl = document.getElementById("blizz_cards");
	fetch("http://localhost:3000/blizzData", {
		method: "GET",
	})
		.then((res) => res.json())
		.then((res) => {
			for (const card of res) {
				const div = document.createElement("div");
				div.className = "item";

				const img = document.createElement("img");
				img.src = card.image.url;
				img.width = 200;
				img.height = 200;

				const priceDiv = document.createElement("div");
				priceDiv.className = "price";
				priceDiv.innerHTML = card.price.cta;

				const loadingSpinner = document.getElementById("card_loading");
				loadingSpinner.style.display = "none";

				div.appendChild(img);
				div.appendChild(priceDiv);

				blizzCardEl.appendChild(div);
			}
		})
		.catch((err) => {
			console.log(err);
		});
}, 3 * 1000);
