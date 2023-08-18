/*
let seleccionjugador = 0;
let habilidad = 0;
let vidadummyinicial = 100;
let vidadummy = 0;
let vidajugador;
let manajugador;
let nombrejugador;
let danioactual = 0;
let seleccionjugadorobjetivo = 0;


class Jugador {

    constructor(idjugador, nombrejugador, vidajugador, manajugador, daniojugador) {

        this.idjugador = idjugador;
        this.vidajugador = vidajugador;
        this.manajugador = manajugador;
        this.nombrejugador = nombrejugador;
        this.objetivo = null;
        this.daniojugador = daniojugador;
    }

    getNombre() {
        return this.nombrejugador;
    }
    getMana() {
        return this.manajugador;
    }
    getVida() {
        return this.vidajugador;
    }
    getIdjugador() {
        return this.idjugador;
    }
    getDanio() {
        return this.daniojugador;
    }
    getConjuntohabilidades() {
        return this.arrayhabilidades;
    }
    //no hago un set ID porque no se deberia poder cambiar


    setNombre(nombrenuevo) {
        this.nombrejugador = nombrenuevo;
    }
    setVida(vidanueva) {
        this.vidajugador = vidanueva;
    }
    setMana(mananuevo) {
        this.manajugador = mananuevo;
    }
    setArma(armaAequipar) {
        this.arma = armaAequipar;
    }
    setObjetivo(nuevoObjetivo) {
        this.objetivo = nuevoObjetivo; //le paso otro jugador como "target"
    }
    setConjuntohabilidades(arrayhabilidades) {
        this.arrayhabilidades = arrayhabilidades;
    }
    setDanio(nuevodanio) {
        this.daniojugador = nuevodanio;
    }


    /*metodos:

    atacar: infligir daño al objetivo que se seleccione

    curar: curar al objetivo que se seleccione
*/

/*}

/*
class Habilidad {
    constructor(idhabilidad, daniohabilidad, nombrehabilidad) {
        this.idhabilidad = idhabilidad;
        this.daniohabilidad = daniohabilidad;
        this.nombrehabilidad = nombrehabilidad;
    }

    getIdhabilidad() {
        return this.idhabilidad;
    }
    getDaniohabilidad() {
        return this.daniohabilidad;
    }
    getNombrehabilidad() {
        return this.nombrehabilidad;
    }
    setDaniohabilidad(nuevodaniohabilidad) {
        this.daniohabilidad = nuevodaniohabilidad;
    }
    setNombrehabilidad(nuevonombrehabilidad) {
        this.nombrehabilidad = nuevonombrehabilidad;
    }
}


let listajugadores = new Array();

let boladefuego = new Habilidad(1, 20, "Bola de Fuego");
let lanzadehielo = new Habilidad(2, 15, "Lanza de Hielo");
let rayo = new Habilidad(3, 10, "Rayo");
let curacion = new Habilidad(4, 25, "Curacion");
let disparo = new Habilidad(5, 15, "Disparo");
let disparomortal = new Habilidad(6, 40, "Disparo Mortal");
let curacionsuperior = new Habilidad(7, 50, "Curacion Superior");
let golpesiniestro = new Habilidad(8, 20, "Golpe Siniestro");
let sentencia = new Habilidad(9, 20, "Sentencia");
let choquesagrado = new Habilidad(10, 25, "Choque Sagrado");
let boladesombras = new Habilidad(11, 15, "Bola de Sombras");
let choquedetierra = new Habilidad(12, 25, "Choque de Tierra");

librohabilidades = new Array();
listahabilidades1 = new Array();
listahabilidades2 = new Array();

librohabilidades.push(boladefuego);
librohabilidades.push(rayo);
librohabilidades.push(disparo);
librohabilidades.push(curacionsuperior);
librohabilidades.push(sentencia);
librohabilidades.push(lanzadehielo);
librohabilidades.push(boladesombras);
librohabilidades.push(curacion);
librohabilidades.push(disparomortal);
librohabilidades.push(golpesiniestro);
librohabilidades.push(choquesagrado);
librohabilidades.push(choquedetierra);

listahabilidades1.push(boladefuego);
listahabilidades1.push(rayo);
listahabilidades1.push(disparo);
listahabilidades1.push(curacionsuperior);
listahabilidades1.push(sentencia);
listahabilidades1.push(boladesombras);

listahabilidades2.push(lanzadehielo);
listahabilidades2.push(curacion);
listahabilidades2.push(disparomortal);
listahabilidades2.push(golpesiniestro);
listahabilidades2.push(choquesagrado);
listahabilidades2.push(choquedetierra);


let jugador1 = new Jugador(1, "Gaston", 100, 100, 20);
jugador1.setConjuntohabilidades(listahabilidades1)


let jugador2 = new Jugador(2, "Melita", 150, 100, 10);
jugador2.setConjuntohabilidades(listahabilidades2)

listajugadores.push(jugador1);
listajugadores.push(jugador2);

for (i = 0; i < 5; i++) {

    let opcion = parseInt(prompt("Seleccione que quiere hacer: \n 1) Atacar un jugador a otro \n 2) Listar las habilidades de un jugador \n 3) Modificar las habilidades de un jugador"));

    if (opcion == 1) {
        let iniciar = confirm("Quiere iniciar combate?");

        if (iniciar) {
            for (i = 0; i < listajugadores.length; i++) {
                console.log("ID: " + listajugadores[i].getIdjugador() + " Nombre: " + listajugadores[i].getNombre() + "\n");
            }
            seleccionjugador = parseInt(prompt("seleccione a su jugador"));
            danioactual = listajugadores[buscarJugador(seleccionjugador)].getDanio();
            seleccionjugadorobjetivo = parseInt(prompt("seleccione al jugador que quiera atacar"));
            if (listajugadores[buscarJugador(seleccionjugadorobjetivo)].getVida() <= 0) {
                console.log("El jugador esta muerto");
            }
            else {
                listajugadores[buscarJugador(seleccionjugadorobjetivo)].setVida(listajugadores[buscarJugador(seleccionjugadorobjetivo)].getVida() - danioactual);
                console.log(listajugadores[buscarJugador(seleccionjugador)].getNombre() + " infligio " + listajugadores[buscarJugador(seleccionjugador)].getDanio() + "  de daño a " + listajugadores[buscarJugador(seleccionjugadorobjetivo)].getNombre());
            }

            let ordenar = confirm("Desea ordenar a los jugadores por su vida restante? de mayor a menor");
            if (ordenar) {
                listajugadores.sort(function (a, b) { return b.getVida() - a.getVida() });
                for (i = 0; i < listajugadores.length; i++) {
                    console.log(listajugadores[i].getNombre() + " tiene " + listajugadores[i].getVida());
                }
            }
        }
    }

    if (opcion == 2) {
        let listar = confirm("Desea listar las habilidades de un jugador?");
        if (listar) {
            seleccionjugador = parseInt(prompt("seleccione a su jugador"));
            for (i = 0; i < listajugadores.length; i++) {
                console.log("ID: " + listajugadores[i].getIdjugador() + " Nombre: " + listajugadores[i].getNombre() + "\n");
            }
            console.log(listarhabilidades(seleccionjugador));
        }
    }

    if (opcion == 3) {
        let modificar = confirm("Desea modificar las habilidades de un jugador?");
        seleccionjugador = parseInt(prompt("seleccione a su jugador"));
        console.log(listarhabilidades(seleccionjugador));
        if (modificar) {
            let eleccion = parseInt(prompt("Seleccione la accion que desea tomar: \n 1) Eliminar habilidad \n 2) Agregar habilidad \n 3) Ordenar"));
            switch (eleccion) {
                case 1:
                    seleccionhabilidad = parseInt(prompt("seleccione el ID de la habilidad que quiere eliminar"));
                    for (i = listajugadores[buscarJugador(seleccionjugador)].getConjuntohabilidades().length - 1; i >= 0; i--) {
                        if (listajugadores[buscarJugador(seleccionjugador)].getConjuntohabilidades()[i].getIdhabilidad() === seleccionhabilidad) {
                            listajugadores[buscarJugador(seleccionjugador)].getConjuntohabilidades().splice(i, 1);
                            console.log(listarhabilidades(seleccionjugador));
                        }
                    }
                    break;

                case 2:
                    for (i = 0; i < librohabilidades.length; i++) {
                        console.log(librohabilidades[i].getIdhabilidad());
                        console.log(librohabilidades[i].getNombrehabilidad());
                    }
                    seleccionhabilidad = parseInt(prompt("seleccione el ID de la habilidad que quiere agregar"));
                    for (i = 0; i < librohabilidades.length; i++) {
                        if (librohabilidades[i].getIdhabilidad() == seleccionhabilidad)
                            listajugadores[buscarJugador(seleccionjugador)].getConjuntohabilidades().push(librohabilidades[i]);
                    }
                    console.log(listarhabilidades(seleccionjugador));
                    break;

                case 3:
                    let seleccionordenar = parseInt(prompt("Desea ordenar de: \n 1) Mayor a menor \n 2) Menor a Mayor"))
                    if (seleccionordenar == 1) {
                        listajugadores[buscarJugador(seleccionjugador)].getConjuntohabilidades().sort(function (a, b) { return b.getIdhabilidad() - a.getIdhabilidad() });
                    }
                    if (seleccionordenar == 2) {
                        listajugadores[buscarJugador(seleccionjugador)].getConjuntohabilidades().sort(function (a, b) { return a.getIdhabilidad() - b.getIdhabilidad() });
                    }

                    console.log(listarhabilidades(seleccionjugador));
                    break;
            }
        }
    }
}

//implementacion manual de un buscador de jugadores por ID

function buscarJugador(idjugador) {
    let i = 0;

    while (i < listajugadores.length) {
        if (listajugadores[i].getIdjugador() == idjugador) {
            return i;
        }
        i++
    }
    return -1;
}

function listarhabilidades(idjugador) {
    for (i = 0; i < listajugadores[buscarJugador(idjugador)].getConjuntohabilidades().length; i++) {
        habilidad = listajugadores[buscarJugador(idjugador)].getConjuntohabilidades()[i];
        console.log(habilidad.getIdhabilidad());
        console.log(habilidad.getNombrehabilidad());
    }
}

*/

const clave_cuentas = "cuenta";
let listacuentas = new Array();

let avisos = document.getElementById("avisoslogin");
let btn_crear = document.getElementById("btn_submit");
const habilidades = [
	{
		danio: 20,
		nombre: "Bola de Fuego",
	},
	{
		danio: 15,
		nombre: "Lanza de Hielo",
	},
	{
		danio: 10,
		nombre: "Rayo",
	},
	{
		danio: 25,
		nombre: "Curacion",
	},
	{
		danio: 15,
		nombre: "Disparo",
	},
	{
		danio: 40,
		nombre: "Disparo Mortal",
	},
	{
		danio: 50,
		nombre: "Curacion Superior",
	},
	{
		danio: 20,
		nombre: "Golpe Siniestro",
	},
	{
		danio: 20,
		nombre: "Sentencia",
	},
	{
		danio: 25,
		nombre: "Choque Sagrado",
	},
	{
		danio: 15,
		nombre: "Bola de Sombras",
	},
	{
		danio: 25,
		nombre: "Choque de Tierra",
	},
];

localStorage.setItem("habilidades", JSON.stringify(habilidades));

btn_crear.addEventListener("click", () => {
	if (validar_formulario()) {
		generarcuenta();
	}
});

function validar_formulario() {
	avisos.innerHTML = "";

	let input_nombre = document.getElementById("nombreusuario").value;
	let input_contrasenia = document.getElementById("contraseniausuario").value;

	let arreglo_mensajes = new Array();
	if (!input_nombre) {
		arreglo_mensajes.push("nombre");
	}
	if (!input_contrasenia) {
		arreglo_mensajes.push("contrasenia");
	}
	if (arreglo_mensajes.length > 0) {
		// let lista = document.createElement("ul");
		// lista.textContent = "No es posible cargar los datos: ";

		// arreglo_mensajes.forEach((element) => {
		// 	lista.appendChild(crear_li(element));
		// });
		// avisos.appendChild(lista);

		Swal.fire({
			title: "Fallo la creacion del usuario",
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

function generarcuenta() {
	let nombre = document.getElementById("nombreusuario").value;
	let contrasenia = document.getElementById("contraseniausuario").value;

	guardar_cuenta(nombre, contrasenia);
	resetear_form();
	window.location.href = "/characterselec.html";
}

function resetear_form() {
	document.getElementById("nombreusuario").value = "";
	document.getElementById("contraseniausuario").value = "";
}

function guardar_cuenta(nombre, contrasenia) {
	localStorage.setItem(
		clave_cuentas,
		JSON.stringify({ username: nombre, password: contrasenia, personajes: [] })
	);
}
