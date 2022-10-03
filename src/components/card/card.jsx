import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import VideoPlayer from '../videoPlayer/videoPlayer';

const Card = (props) => {
  const {
    film,
    onMouseEnter,
    onMouseLeave,
    isPlaying
  } = props;
  const {
    id,
    name,
    previewImage,
    videoLink
  } = film;

  const videoRef = useRef(null);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(videoRef, id)}
    >
      <Link className="small-movie-card__link"
        to={`${AppRoute.FILMS}/:${id}`}>
        <div className="small-movie-card__image">
          <VideoPlayer
            poster={previewImage}
            src={videoLink}
            videoRef={videoRef}
            isMuted={true}
            isPlaying={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
};

Card.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default Card;
