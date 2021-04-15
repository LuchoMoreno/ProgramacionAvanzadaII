const $lista = document.getElementById("lista");
const $txtTarea = document.getElementById("txtTarea");

// el estado debe ser inmutable y sólo se actualizará a través de una funcion. 

const setState = (nuevoEstado) =>{

for (const key in nuevoEstado) {
    if (Object.hasOwnProperty.call(state, key)) {
        state[key] = nuevoEstado[key];   
    }
}
render();
}


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


const getState = () =>
{
    return JSON.parse(JSON.stringify(state));
}


const render = ()=>{
$lista.innerHTML = "";
$lista.appendChild(template());

}



// submit, funcion anonima event, tercer parametro es true.
document.addEventListener('submit', (e) => {
    if (!e.target.matches("#frmTarea"))return false;

    e.preventDefault();
    if (!$txtTarea) return false;

    //const lista = state.listaTareas.concat($txtTarea.value);


    // es reactivo, porque cuando yo modifico el estado
    const estadoActual = getState();
    estadoActual.listaTareas.push("jajaja");
    setState(estadoActual);

    $txtTarea.value = "";
    $txtTarea.focus();

})