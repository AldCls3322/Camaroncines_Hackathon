import {saveTask} from "./firebase.js"

window.addEventListener('DOMContentLoaded', () => {

})

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

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

    saveTask(nombreDte.value, edadDte.value, trabajoDte.value, generoDte.value, estudioDte.value, emailDte.value, start.value, lugar.value, evento.value, nombreDdo.value, trabajoDdo.value);

    taskForm.reset()
    nombreDte.focus()

    console.log(nombreDte, edadDte, trabajoDte, generoDte, estudioDte, emailDte, start, lugar, evento, nombreDdo, trabajoDdo);

})