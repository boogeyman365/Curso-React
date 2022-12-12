
// Desestructuración o Asignación Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const { nombre ,edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
  console.log(nombre , edad, rango);
  return {
    nombreClave: clave,
    años: edad,
    latlang: {
      lat: 30.211,
      lang: -21.22
    }
  }
}

const {nombreClave, años, latlang:{lat, lang}} = retornaPersona( persona );

console.log( nombreClave, años );
console.log(lat, lang);