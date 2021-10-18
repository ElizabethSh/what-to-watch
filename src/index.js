import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  released: 2014,
};

ReactDom.render(
    <App
      promoFilm={promoFilm}
    />,
    document.getElementById(`root`)
);
