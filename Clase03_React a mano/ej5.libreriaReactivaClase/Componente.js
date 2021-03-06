export default class Componente{

    constructor(options)
    {
        this.selector = options.selector;
        this.state = options.state;
        this.template = options.template;
    }


    render()
    {
        const $elementoDOM = document.querySelector(this.selector);
        $elementoDOM.innerHTML = "";
        $elementoDOM.appendChild(this.template(this.state));
    }
    

    setState(nuevoEstado){
    
        for (const key in nuevoEstado) {
            if (Object.hasOwnProperty.call(this.state, key)) {
                this.state[key] = nuevoEstado[key];   
            }
        }
        this.render();

    }

    getState(){
        return JSON.parse(JSON.stringify(this.state));

    }


}

