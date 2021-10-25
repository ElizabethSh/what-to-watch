import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';

const promoFilm = {
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  released: 2014,
};

const store = createStore(reducer, devToolsEnhancer());

ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App
          promoFilm={promoFilm}
          films={films}
          reviews={reviews}
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById(`root`)
);
