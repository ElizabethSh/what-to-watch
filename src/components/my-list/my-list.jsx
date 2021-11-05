import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import {getFavorites} from '../../store/api-actions';
import {filmProp} from '../../common/prop-types/film-props';

const MyList = (props) => {
  const {
    favorites,
    isFavoritesLoaded,
    loadFavorites
  } = props;

  useEffect(() => {
    if (!isFavoritesLoaded) {
      loadFavorites();
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

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
    isFavoritesLoaded: state.favorites.isFavoritesLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavorites: () => dispatch(getFavorites())
  };
};

MyList.propTypes = {
  favorites: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ),
  isFavoritesLoaded: PropTypes.bool.isRequired,
  loadFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
