import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import Auth from '../auth/auth';
import NotFoundPage from '../not-found-page/not-found-page';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Player from '../player/player';
import AddReviewPage from '../add-review-page/add-review-page';
import {filmProp} from '../../common/prop-types/film-props';
import {reviewProp} from '../../common/prop-types/review-prop';

const App = ({promoFilm, films, reviews}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Main
          promoFilm={promoFilm}
          films={films} />
      </Route>
      <Route exact path="/login">
        <Auth />
      </Route>
      <Route exact path="/mylist">
        <MyList
          films={films}
        />
      </Route>
      <Route exact path="/films/:id">
        <Film
          films={films}
          reviews={reviews}
        />
      </Route>
      <Route exact path="/films/:id/review">
        <AddReviewPage
          film={films[2]}
        />
      </Route>
      <Route exact path="/player">
        <Player
          film={films[2]}
        />
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
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewProp)
  ).isRequired,
};

export default App;
