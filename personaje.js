class Personaje {
	constructor(nombre, faccion, raza, genero, clase, foto) {
		this.nombre = nombre;
		this.faccion = faccion;
		this.raza = raza;
		this.genero = genero;
		this.clase = clase;
		this.foto = foto;
	}
	getConjuntohabilidades() {
		return this.arrayhabilidades;
	}
	setConjuntohabilidades(arrayhabilidades) {
		this.arrayhabilidades = arrayhabilidades;
	}
}

let listapersonajes = new Array();

let avisos = document.getElementById("avisos");
let btn_crear = document.getElementById("btn_crear");

btn_crear.addEventListener("click", () => {
	if (validar_formulario()) {
		generarPersonaje();
	}
});

function validar_formulario() {
	avisos.innerHTML = "";

	let input_nombre = document.getElementById("nombrepersonaje").value;
	let input_faccion = document.getElementById("faccionpersonaje").value;
	let input_raza = document.getElementById("razapersonaje").value;
	let input_genero = document.getElementById("generopersonaje").value;
	let input_clase = document.getElementById("clasepersonaje").value;
	let input_foto = document.getElementById("fotopersonaje").value;

	let arreglo_mensajes = new Array();
	if (!input_nombre) {
		arreglo_mensajes.push("Ingrese nombre");
	}
	if (!input_faccion) {
		arreglo_mensajes.push("Ingrese faccion");
	}
	if (!input_raza) {
		arreglo_mensajes.push("Ingrese una raza");
	}
	if (!input_genero) {
		arreglo_mensajes.push("Ingrese genero: debe ser H o M");
	}
	if (!input_clase) {
		arreglo_mensajes.push("Ingrese su clase");
	}
	if (!input_foto) {
		arreglo_mensajes.push("Ingrese la ruta de la imagen");
	}
	if (arreglo_mensajes.length > 0) {
		/*let lista = document.createElement("ul");
		lista.textContent = "No es posible cargar los datos: ";

		arreglo_mensajes.forEach((element) => {
			lista.appendChild(crear_li(element));
		});

		avisos.appendChild(lista);*/
		Swal.fire({
			title: "Fallo la creacion del personaje",
			text: "Para continuar ingrese " + arreglo_mensajes.join(" y "),
			confirmButtonText: "Intentar Denuevo",
			confirmButtonColor: "#ff0000",
		});
	}

	return arreglo_mensajes.length == 0;
}

function crear_li(mensaje) {
	let li = document.createElement("li");
	li.textContent = mensaje;
	return li;
}

function addToCuenta(personaje) {
	const cuenta = localStorage.getItem("cuenta");

	const cuentaObj = JSON.parse(cuenta);
	cuentaObj.personajes.push(personaje);

	localStorage.setItem("cuenta", JSON.stringify(cuentaObj));
}

function generarPersonaje() {
	let nombre = document.getElementById("nombrepersonaje").value;
	let faccion = document.getElementById("faccionpersonaje").value;
	let raza = document.getElementById("razapersonaje").value;
	let genero = document.getElementById("generopersonaje").value;
	let clase = document.getElementById("clasepersonaje").checked;
	let foto = document.getElementById("fotopersonaje").value;
	let habilidades = Array.from(
		document.getElementById("selecthabilidades").selectedOptions
	).map((o) => ({
		nombre: o.getAttribute("data-nombre"),
		danio: o.getAttribute("data-danio"),
	}));

	let personaje = new Personaje(
		nombre,
		faccion,
		raza,
		genero,
		clase,
		`/images/${foto}`
	);
	personaje.setConjuntohabilidades(habilidades);

	let almacenados = JSON.parse(localStorage.getItem("Personajes") || "[]");
	almacenados.push(personaje);

	let coleccion = JSON.stringify(almacenados);
	localStorage.setItem("Personajes", coleccion);

	listapersonajes.push(personaje);
	generar_card_personaje(personaje);
	addToCuenta(personaje);
}

function generar_card_personaje(personaje) {
	let new_div = document.createElement("div");
	let new_h2 = document.createElement("h2");
	new_div.id = "div" + personaje.nombre + personaje.foto;
	new_h2.textContent = personaje.nombre;

	let new_img = document.createElement("img");
	new_img.src = personaje.foto;

	new_div.appendChild(new_h2);
	new_div.appendChild(new_img);

	let contenedor = document.getElementById("personajeCtn");
	contenedor.appendChild(new_div);
	const habilidades = personaje.getConjuntohabilidades();
	habilidades.forEach((h) => {
		const habilidad = document.createElement("p");
		habilidad.innerHTML = h.nombre;
		new_div.appendChild(habilidad);
	});

	resetear_form();
}

function resetear_form() {
	document.getElementById("nombrepersonaje").value = "";
	document.getElementById("faccionpersonaje").value = "";
	document.getElementById("razapersonaje").value = "";
	document.getElementById("generopersonaje").value = "";
	document.getElementById("clasepersonaje").value = "";
	document.getElementById("fotopersonaje").value = "";
}


//ordenar alfabeticamente
const selectElement = document.getElementById("selecthabilidades");
const sortButton = document.getElementById("btn_ordenaralfabeticamente");

sortButton.addEventListener("click", sortOptions);

//sort
function sortOptions() {
	const options = Array.from(selectElement.options);
	options.sort((a, b) => a.text.localeCompare(b.text));

	//limpiamos las opciones
	selectElement.innerHTML = '';

	//volvemos a poner las opciones ordenadas
	options.forEach(option => {
		selectElement.appendChild(option);
	});
}

//ordenar por danio
const selectElement2 = document.getElementById("selecthabilidades");
const sortButton2 = document.getElementById("btn_ordenarpordanio");

sortButton2.addEventListener("click", sortOptions2);

//sort
function sortOptions2() {
	const options = Array.from(selectElement.options);
	options.sort((a, b) => parseInt(a.getAttribute("data-danio")) - parseInt(b.getAttribute("data-danio")));

	//limpiamos las opciones
	selectElement.innerHTML = '';

	//volvemos a poner las opciones ordenadas
	options.forEach(option => {
		selectElement.appendChild(option);
	});
}


