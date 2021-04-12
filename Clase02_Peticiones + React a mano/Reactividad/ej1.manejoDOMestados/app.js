const $lista = document.getElementById("lista");
const $txtTarea = document.getElementById("txtTarea");

// El comportamiento se divide en tres partes, 

// 1) se actualiza el estado.
// 2) armar una plantilla
// 3) renderizado (insercion en la UI)

const state = {
listaTareas : [],
}

const template = () =>{

    $fragmento = document.createDocumentFragment();
    if (state.listaTareas.length == 0){
        $item = document.createElement("li");
        $item.textContent = "No hay tareas pendientes";    
        $fragmento.appendChild($item);
    }

    else
    {
        state.listaTareas.forEach( (tarea) => {
            $item = document.createElement("li");
            $item.textContent = tarea;
            $fragmento.appendChild($item);
        })
    }

    return $fragmento
};


const render = ()=>{

$lista.innerHTML = "";
$lista.appendChild(template());

}



// submit, funcion anonima event, tercer parametro es true.
document.addEventListener('submit', (e) => {
    if (!e.target.matches("#frmTarea"))return false;

    e.preventDefault();
    if (!$txtTarea) return false;

    state.listaTareas.push($txtTarea.value);
    render();
    $txtTarea.value = "";
    $txtTarea.focus();

})