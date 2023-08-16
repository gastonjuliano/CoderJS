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