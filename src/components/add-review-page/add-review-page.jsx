import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import {AppRoute} from '../../common/const';
import {getArrayItem, toNumber} from '../../common/utils';
import {filmProp} from '../../common/prop-types/film-props';
import UserBlock from '../user-block/user-block';

const AddReviewPage = ({films}) => {
  let {id} = useParams();
  id = toNumber(id);

  const {
    name,
    posterImage,
    backgroundColor,
    backgroundImage,
  } = getArrayItem(films, id);

  return (
    <section className="movie-card movie-card--full"
      style={{backgroundColor}}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}/:${id}`}
                  className="breadcrumbs__link"
                >{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage}
            alt={name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm
        backgroundColor={backgroundColor}
        filmId={id}
      />
    </section>
  );
};

AddReviewPage.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ).isRequired,
};

export default AddReviewPage;
