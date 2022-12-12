const saludar = function(nombre) {
  return `Hola, ${nombre}`;
}

// Funcion de flecha Acortada
const saludar2 = (nombre) => `Hola, ${nombre}`;


// console.log(saludar('Goku'));
console.log(saludar2('Goku'));

// Funcion flecha normal
const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papu'
  }
}

// Funcion flecha acortada
const getUser2 = () => 
  ({
    uid: 'ABC123',
    username: 'El_Papu'
  });

function getUsuarioActivo( nombre ) {
  return {
    uid: 'ABC567',
    username: nombre
  }
}

const getUsuarioActivo2 = ( nombre ) => 
({  uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo2('Fer');

console.log(usuarioActivo);