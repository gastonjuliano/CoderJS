class Cuenta{
    constructor(nombreusuario, contraseniausuario){
        this.nombreusuario=nombreusuario;
        this.contraseniausuario=contraseniausuario;
    }
    setContrasenianueva(contrasenianueva){
        this.contraseniausuario=contrasenianueva;
    }
    getNombreusuario(){
        return this.nombreusuario;
    }
    setListapersonajes(listapersonajes){
        this.listapersonajes=listapersonajes;
    }
    getListapersonajes(){
        return this.listapersonajes;
    }
}