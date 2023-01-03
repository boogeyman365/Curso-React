import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    });
  });
  test('getHeroeById debe retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar heroes de DC y tienen que ser 3 ', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);

    expect(hero).toEqual([{
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    ]);
    expect(hero).toHaveLength(3);
  });

  test('getHeroesByOwner debe retornar heroes de Marvel y tienen que ser 2 ', () => {
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    
    expect(hero).toEqual([
        {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },
    ]);
    expect(hero).toHaveLength(2);
  })
  
  
})
