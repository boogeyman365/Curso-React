import { getHeroeById, getHeroesByOwner } from './Bases/08-imports-exports';


// const promesa = new Promise( (resolve, reject) => { 
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         reject( 'No se pudo enctontrar el heroe' );
//     }, 2000);
// } );


// promesa.then( ( heroe ) => {
//     console.log('heroe: ', heroe);
// }).catch( err => { console.warn(err)});

const getHeroeByIdAsync = ( id ) => {
    
    const promesa = new Promise( (resolve, reject) => { 
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject( 'No se pudo enctontrar el heroe' )
            // resolve( heroe );
            // reject( 'No se pudo enctontrar el heroe' );
        }, 2000);
    } );

    return promesa;
}

getHeroeByIdAsync(10)
    .then( console.log)
    .catch( console.warn);