import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import Auth from '../auth/auth';
import NotFoundPage from '../not-found-page/not-found-page';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Player from '../player/player';
import ReviewForm from '../review-form/review-form';

const App = ({promoFilm}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Main promoFilm={promoFilm} />
      </Route>
      <Route exact path="/login">
        <Auth />
      </Route>
      <Route exact path="/mylist">
        <MyList />
      </Route>
      <Route exact path="/films/:id">
        <Film />
      </Route>
      <Route exact path="/films/:id/review">
        <ReviewForm />
      </Route>
      <Route exact path="/player">
        <Player />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
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
