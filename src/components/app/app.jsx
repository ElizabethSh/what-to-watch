import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({promoFilm}) => {
  return (
    <Main
      promoFilm={promoFilm}
    />
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  })
};

export default App;
