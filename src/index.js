import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {films} from './mocks/films';

const promoFilm = {
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  released: 2014,
};

ReactDom.render(
    <BrowserRouter>
      <App
        promoFilm={promoFilm}
        films={films}
      />
    </BrowserRouter>,
    document.getElementById(`root`)
);
