import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import './not-found-page.css';

const NotFoundPage = () => {
  return (
    <div className="modal">
      <section className="modal__content">
        <h1 className="modal__title">Error 404: <br /> Page is not found</h1>
        <p className="modal__desc">
          The page you are looking for might have been removed
          had its name changed or is temporarily unavailable.
        </p>
        <Link className="modal__link catalog__button"
          to={AppRoute.ROOT}
        >Go to home page</Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
