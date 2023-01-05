// import { Fragment } from 'react';
import PropTypes from 'prop-types';

// export const FirstApp = () => {
//   return (
//   // Uso de Fragment para que no cree un div fantasma en el HTML
//     <Fragment>
//       <h1>Oscar</h1>
//       <p>Soy un subtitulo</p>
//     </Fragment>
//   );
// }


const getResult = (a , b) => {
  return (a + b)
};

export const FirstApp = ({ title, subTitle, name }) => {

  return (
    // Usar <> es lo mismo que usar Fragment sin tener que importarlo
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <h4> { subTitle } </h4>
      <h4> { name } </h4>
      {/* <p>Soy un { getResult(1,20) }</p> */}
    </>
  );
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
  title: 'Title por defecto',
  subTitle: 123,
  name: 'Oscar establie'
}