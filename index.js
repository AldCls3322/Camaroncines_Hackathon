// Uso de una funcion con el uso de firebase
import {saveTask} from "./firebase.js"

// Obtenemos todos los elementos de nuestro forms
const taskForm = document.getElementById('task-form');

// funcion cuando el boton sea clickeado
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // elementos de cada input del forms
    const nombreDte = taskForm['dtename'];
    const edadDte = taskForm['dteage'];
    const trabajoDte = taskForm['dtejob'];
    const generoDte = taskForm['genero'];
    const estudioDte = taskForm['estudios'];
    const emailDte = taskForm['email'];
    const start = taskForm['start'];
    const lugar = taskForm['lugar'];
    const evento = taskForm['evento'];
    const nombreDdo = taskForm['ddonombre'];
    const trabajoDdo = taskForm['ddotrabajo'];

    // llamado de la funcion de firebase
    saveTask(nombreDte.value, edadDte.value, trabajoDte.value, generoDte.value, estudioDte.value, emailDte.value, start.value, lugar.value, evento.value, nombreDdo.value, trabajoDdo.value);

    // limpia el foms una vez enviado
    taskForm.reset()
    nombreDte.focus()

    // podemos ver en consola los datos enviados
    console.log(nombreDte, edadDte, trabajoDte, generoDte, estudioDte, emailDte, start, lugar, evento, nombreDdo, trabajoDdo);

})