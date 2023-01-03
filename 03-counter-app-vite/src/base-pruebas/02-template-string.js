

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Oscar';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );