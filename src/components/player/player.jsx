import React from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';

const Player = ({film}) => {
  const {runTime} = film;

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            {/* <progress className="player__progress" value="30" max="100"></progress> */}
            {/* <div className="player__toggler" style="left: 30%;">Toggler</div> */}
          </div>
          {/* должно быть в формате 1:30:29 */}
          <div className="player__time-value">{runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>

      </div>
    </div>
  );
};

Player.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
};

export default Player;
