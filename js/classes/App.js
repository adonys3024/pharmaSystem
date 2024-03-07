
import { datosCita, nuevaCita } from '../funciones.js';
import { nombreInput, identificacionInput,cieInput, farmacoInput, fechaInput, horaInput, indicacionesInput, formulario } from '../selectores.js';

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        // Eventos
        eventListeners();
        function eventListeners() {
            nombreInput.addEventListener('change', datosCita);
            identificacionInput.addEventListener('change', datosCita);
			cieInput.addEventListener('change', datosCita);
            farmacoInput.addEventListener('change', datosCita);
            fechaInput.addEventListener('change', datosCita);
            horaInput.addEventListener('change', datosCita);
            indicacionesInput.addEventListener('change', datosCita);

            // Formulario nuevas recetas
            formulario.addEventListener('submit', nuevaCita);
        }

    }
}

export default App;