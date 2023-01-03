import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe al segundo', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then( hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
      })
        done();
      })
  })

  test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .catch( error => {
        // expect(hero).toEqual({
        //   id: 1,
        //   name: 'Batman',
        //   owner: 'DC'
        // })
        expect(error).toBe(`No se pudo encontrar el heroe ${id}`)
        done();
      });
  })
  
})
