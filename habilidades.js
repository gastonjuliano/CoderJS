const habilidadesSelectEl = document.getElementById("selecthabilidades");

fetch("http://localhost:3000/assets/habilidades.json", { method: "GET" })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		for (const [idx, habilidad] of Object.entries(data)) {
			const opt = document.createElement("option");
			opt.id = idx;
			opt.setAttribute("data-nombre", habilidad.nombre);
			opt.setAttribute("data-danio", habilidad.danio);
			opt.innerHTML = `${habilidad.nombre} ${habilidad.danio}`;
			habilidadesSelectEl.appendChild(opt);
		}
	})
	.catch((err) => {
		console.log(err);
	});
