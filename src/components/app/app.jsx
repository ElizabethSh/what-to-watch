import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import Auth from '../auth/auth';
import NotFoundPage from '../not-found-page/not-found-page';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Loader from '../loader/loader';
import Player from '../player/player';
import AddReviewPage from '../add-review-page/add-review-page';
import {getFilms} from '../../store/api-actions';
import {AppRoute} from '../../common/const';
import {filmProp} from '../../common/prop-types/film-props';
import {reviewProp} from '../../common/prop-types/review-prop';


const App = (props) => {
  const {
    promoFilm,
    reviews,
    films,
    isFilmsLoaded,
    uploadFilms
  } = props;

  useEffect(() => {
    if (!isFilmsLoaded) {
      uploadFilms();
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return <Loader />;
  }

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Main
          promoFilm={promoFilm}
        />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <Auth />
      </Route>
      <Route exact path={AppRoute.MY_LIST}>
        <MyList
          films={films}
        />
      </Route>
      <Route exact path={`${AppRoute.FILMS}/:id`}>
        <Film
          reviews={reviews}
        />
      </Route>
      <Route exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}>
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

const mapStateToProps = (state) => {
  return {
    films: state.films.films,
    isFilmsLoaded: state.films.isFilmsLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFilms: () => dispatch(getFilms())
  };
};

App.propTypes = {
  isFilmsLoaded: PropTypes.bool.isRequired,
  uploadFilms: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
