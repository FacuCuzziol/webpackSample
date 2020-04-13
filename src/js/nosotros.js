
import '../css/style.scss';

class CLiente {
    constructor(nombre){
        this.nombre = nombre;
    }
}

const cliente = new CLiente('Facu');
console.log(cliente);
console.log('desde nosotros');