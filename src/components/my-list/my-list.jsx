import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import {fetchFavorites} from '../../store/api-actions';

const MyList = () => {
  const dispatch = useDispatch();
  const {favorites, isFavoritesLoaded} = useSelector(
      (state) => state.FAVORITES
  );

  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(fetchFavorites());
    }
  }, [isFavoritesLoaded]);

  if (!isFavoritesLoaded) {
    return <Loader />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog"
        style={{flexGrow: 1}}
      >
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList
          films={favorites}
        />

      </section>

      <Footer />
    </div>
  );
};

export default MyList;
