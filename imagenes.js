const images = document.getElementById("fotopersonaje");

fetch("http://localhost:3000/images", { method: "GET" })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		for (const [idx, imagen] of Object.entries(data)) {
			const opt = document.createElement("option");
			opt.id = idx;
			opt.value = imagen;
			opt.innerHTML = imagen;
			images.appendChild(opt);
		}
	})
	.catch((err) => {
		console.log(err);
	});
