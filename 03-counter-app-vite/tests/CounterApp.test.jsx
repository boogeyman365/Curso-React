import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => {
  
    const value = 100;
  
    test('Debe de hacer match con el snapshot', () => {
      const { container } = render(<CounterApp value={value}></CounterApp>);
  
      expect(container).toMatchSnapshot();
    })
  
    test('Debe de mostrar el valor inicial de 100', () => {
      render(<CounterApp value={value}></CounterApp>);
      // screen.debug();
      expect(screen.getByText(100)).toBeTruthy;
    });

		test('Debe de incrementar el boton +1', () => {
      render(<CounterApp value={value}></CounterApp>);
      fireEvent.click( screen.getByText('+1'));
			expect(screen.getByText('101')).toBeTruthy();
    });

		test('Debe de decrementar el boton -1', () => {
      render(<CounterApp value={value}></CounterApp>);
      fireEvent.click( screen.getByText('-1'));
			expect(screen.getByText('99')).toBeTruthy();
    });

		test('Debe de funcionar el boton reset', () => {
      render(<CounterApp value={value}></CounterApp>);
      fireEvent.click( screen.getByText('Reset'));
			expect(screen.getByRole('button', {name: 'btn-reset'})).toBeTruthy();
    });
    
    
  })