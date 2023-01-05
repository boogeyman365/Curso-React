import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {
  
  const title = 'Hola Mundo';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title}></FirstApp>);

    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar el mensaje "Hola soy Goku"', () => {
    render(<FirstApp title={title}></FirstApp>);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe de mostrar el titulo en un H1', () => {
    render(<FirstApp title={title}></FirstApp>);
    expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(titleu);
  })
  
  
})
