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
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import AddReviewPage from '../add-review-page/add-review-page';
import {fetchFilms} from '../../store/api-actions';
import {AppRoute} from '../../common/const';
import {filmProp} from '../../common/prop-types/film-props';
import {getFilms, getFilmsLoadStatus} from '../../store/reducer/films/selectors';


const App = (props) => {
  const {
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
        <Main />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <Auth />
      </Route>
      <PrivateRoute exact
        path={AppRoute.MY_LIST}
        render={() => <MyList/>}
      />
      <Route exact path={`${AppRoute.FILMS}/:id`}>
        <Film/>
      </Route>
      <PrivateRoute exact
        path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
        render={() => <AddReviewPage films={films} />}
      />
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
    films: getFilms(state),
    isFilmsLoaded: getFilmsLoadStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFilms: () => dispatch(fetchFilms())
  };
};

App.propTypes = {
  isFilmsLoaded: PropTypes.bool.isRequired,
  uploadFilms: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
