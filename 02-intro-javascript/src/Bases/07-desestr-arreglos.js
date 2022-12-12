
// Desestructuración o Asignación Desestructurante
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, p2, p3] = personajes;

// console.log(  );
// console.log( p2 );
// console.log( p3 );

const retornoArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornoArreglo();

console.log(letras, numeros);

const userState = ( valor ) => {
  return [valor , () => { console.log('Hola Mundo') } ];
} 

const [nombre, setNombre] = userState('Goku');
console.log(nombre);
setNombre();