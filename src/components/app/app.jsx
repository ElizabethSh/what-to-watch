import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
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


const App = () => {
  const dispatch = useDispatch();
  const {films, isFilmsLoaded} = useSelector(
      (state) => state.FILMS
  );

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
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

export default App;
