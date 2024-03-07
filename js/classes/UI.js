import { eliminarCita, cargarEdicion} from '../funciones.js';
import { contenedorrecetas } from '../selectores.js';


class UI {
     
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirrecetas({recetas}) { // Se puede aplicar destructuring desde la función...
       
        this.limpiarHTML();

        recetas.forEach(cita => {
            const {nombre, identificacion, cie, farmaco, fecha, hora, indicaciones, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // scRIPTING DE LOS ELEMENTOS...
            const nombreParrafo = document.createElement('h2');
            nombreParrafo.classList.add('card-title', 'font-weight-bolder');
            nombreParrafo.innerHTML = `${nombre}`;

            const identificacionParrafo = document.createElement('p');
            identificacionParrafo.innerHTML = `<span class="font-weight-bolder">Identificación: </span> ${identificacion}`;

            const cieParrafo = document.createElement('p');
            cieParrafo.innerHTML = `<span class="font-weight-bolder">CIE-10: </span> ${identificacion}`;


            const farmacoParrafo = document.createElement('p');
            farmacoParrafo.innerHTML = `<span class="font-weight-bolder">Farmaco: </span> ${farmaco}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

            const indicacionesParrafo = document.createElement('p');
            indicacionesParrafo.innerHTML = `<span class="font-weight-bolder">Indicaciones: </span> ${indicaciones}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(nombreParrafo);
            divCita.appendChild(identificacionParrafo);
			divCita.appendChild(cieParrafo);
            divCita.appendChild(farmacoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(indicacionesParrafo);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorrecetas.appendChild(divCita);
        });    
   }

   limpiarHTML() {
        while(contenedorrecetas.firstChild) {
            contenedorrecetas.removeChild(contenedorrecetas.firstChild);
        }
   }
}

export default UI;