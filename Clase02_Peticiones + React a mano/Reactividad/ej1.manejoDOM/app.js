// Uso const cuando lo que voy a guardar 
// es una referencia, un puntero.
const $txtTarea = document.getElementById("txtTarea");
const $lista = document.getElementById("lista");

// submit, funcion anonima event, tercer parametro es true.
document.addEventListener('submit', (e) => {
    if (!e.target.matches("#frmTarea"))return false;

    e.preventDefault();

    if (!$txtTarea) return false;

    $lista.innerHTML += `<li>${$txtTarea.value}</li>`
    $txtTarea.value = "";
    $txtTarea.focus();

})