function Componente(options)
{
    this.selector = options.selector;
    this.state = options.state;
    this.template = options.template;


    

}

Componente.prototype.render = function()
{
    const $elementoDOM = document.querySelector(this.selector);
    $elementoDOM.innerHTML = "";
    $elementoDOM.appendChild(this.template(this.state));
}

Componente.prototype.setState = function(nuevoEstado){

    for (const key in nuevoEstado) {
        if (Object.hasOwnProperty.call(this.state, key)) {
            this.state[key] = nuevoEstado[key];   
        }
    }
    this.render();

}

Componente.prototype.getState = function(){
    return JSON.parse(JSON.stringify(this.state));
}


export default Componente;
