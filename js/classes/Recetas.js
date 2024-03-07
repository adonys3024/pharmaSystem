
class recetas {
    constructor() {
        this.recetas = []
    }
    agregarCita(cita) {
        this.recetas = [...this.recetas, cita];
    }
    editarCita(citaActualizada) {
        this.recetas = this.recetas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.recetas = this.recetas.filter( cita => cita.id !== id);
    }
}

export default recetas;