import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => {
  test('getSaludo debe retornar Hola Oscar', () => {
    
    const name = 'Oscar';
    const message = getSaludo( name );

    expect(message).toBe(`Hola ${name}??`);
  })
  
})
