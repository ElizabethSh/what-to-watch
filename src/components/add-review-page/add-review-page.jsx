import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import {filmProp} from '../../common/prop-types/film-props';

const AddReviewPage = ({film}) => {
  const {id, name, posterImage} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/:${id}`}
                  className="breadcrumbs__link"
                >{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage}
            alt={name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />

    </section>
  );
};

AddReviewPage.propTypes = {
  film: PropTypes.shape(filmProp),
};

export default AddReviewPage;