import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';

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
      />
    </BrowserRouter>,
    document.getElementById(`root`)
);
