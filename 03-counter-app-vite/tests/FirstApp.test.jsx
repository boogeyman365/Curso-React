import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {
  

  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Hola Mundo';
  //   const { container } = render(<FirstApp title={title}></FirstApp>);

  //   expect(container).toMatchSnapshot();
  // })
  
  test('Debe de mostrar el titulo en un H1', () => {
    const title = 'Hola Mundo';
    const { container, getByText, getByTestId } = render(<FirstApp title={title}></FirstApp>);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe de mostrar el sibtitulo enviado por props', () => {
    const title = 'Hola Mundo';
    const subtitle = 123
    const { getAllByText } = render(
      <FirstApp 
        title={title}
        subTitle={subtitle}
        ></FirstApp>
      );

      expect(getAllByText(subtitle)).toBeTruthy();
  })
  
})
