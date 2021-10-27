import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {rootReducer} from './store/reducer/rootReducer';
import {createApi} from './services/api';

const promoFilm = {
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  released: 2014,
};

const api = createApi();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App
          promoFilm={promoFilm}
          reviews={reviews}
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById(`root`)
);
