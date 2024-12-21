const input = document.getElementById('nuevatarea')
const btn = document.getElementById('agregar')
const lista = document.getElementById('list')
const total = document.getElementById('total')
const realizadas = document.getElementById('realizadas')
const listado = document.getElementById('list')

let tareas = [
    { id: 1, name: 'Estudiar', terminada: true },
    { id: 2, name: 'Preparar almuerzos', terminada: true},
    { id: 3, name: 'Limpiar la casa', terminada: true },
    { id: 4, name: 'Hacer ejercicio', terminada: true},
    { id: 5, name: 'Ir al supermercado', terminada: true}
]

//Agregar tareas

btn.addEventListener('click', () => {
    if (input.value === '') return
    tareas.push({
        id: tareas.length +1,
        name: input.value,
        terminada: true});
    input.value = ''
    mostrar ()
})

const mostrar = () =>{
    let template = ''
    for (const tarea of tareas){
        template += `<li>
        ${tarea.id} - ${tarea.name}
        <input type="checkbox" 
            ${tarea.completed ? 'checked' : ''} 
            onclick="status(${tarea.id})">
        <button onclick="borrar(${tarea.id})">borrar</button>
        </li>`
    }
    lista.innerHTML = template
    contadores();
}


function borrar(id) {
    let task = tareas.findIndex(i => i.id === id);

    if(task !== -1){
        tareas.splice(task, 1);
        mostrar();
    }
}

//ver status
const status = (id) => {
    const tarea = tareas.find((e) => e.id === id);
    if (tarea) {
        tarea.completed = !tarea.completed;
        mostrar();
    }
};

//Contadores
const contadores = () => {
    const completadas = tareas.filter( tarea => tarea.completed).length
    total.innerHTML = tareas.length;
    realizadas.innerHTML = completadas;
}
mostrar();
