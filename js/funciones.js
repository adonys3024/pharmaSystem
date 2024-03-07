import recetas from './classes/recetas.js'
import UI from './classes/UI.js'
import { nombreInput, identificacionInput, cieInput, farmacoInput, fechaInput, horaInput, indicacionesInput, formulario } from './selectores.js';


const ui = new UI();
const administrarrecetas = new recetas();

const citaObj = {
    nombre: '',
    identificacion: '',
	cie: '',
    farmaco: '',
    fecha: '',
    hora:'',
    indicaciones: ''
}


let editando = false;

export function datosCita(e) {
    //  console.log(e.target.name) // Obtener el Input
     citaObj[e.target.name] = e.target.value;
}


export function nuevaCita(e) {
    e.preventDefault();

    const {nombre, identificacion,cie, farmaco, fecha, hora, indicaciones } = citaObj;

    // Validar
    if( nombre === '' || identificacion === '' || cie === '' || farmaco === '' || fecha === ''  || hora === '' || indicaciones === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    if(editando) {
        // Estamos editando
        administrarrecetas.editarCita( {...citaObj} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        administrarrecetas.agregarCita({...citaObj});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de recetas
    ui.imprimirrecetas(administrarrecetas);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

export function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.nombre = '';
    citaObj.identificacion = '';
	citaObj.cie = '';
    citaObj.farmaco = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.indicaciones = '';
}


export function eliminarCita(id) {
    administrarrecetas.eliminarCita(id);

    ui.imprimirrecetas(administrarrecetas)
}

export function cargarEdicion(cita) {

    const {nombre, identificacion,cie, farmaco, fecha, hora, indicaciones, id } = cita;

    // Reiniciar el objeto
    citaObj.nombre = nombre;
    citaObj.identificacion = identificacion;
	citaObj.cie = cie;
    citaObj.farmaco = farmaco;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.indicaciones = indicaciones;
    citaObj.id = id;

    // Llenar los Inputs
    nombreInput.value = nombre;
    identificacionInput.value = identificacion;
	cieInput.value = cie;
    farmacoInput.value = farmaco;
    fechaInput.value = fecha;
    horaInput.value = hora;
    indicacionesInput.value = indicaciones;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}