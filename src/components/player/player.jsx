import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory, useParams} from 'react-router';
import {formatToHoursMinutesSeconds, getArrayItem, toNumber} from '../../common/utils';
import {filmProp} from '../../common/prop-types/film-props';

const Player = (props) => {
  const {films} = props;

  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
  });

  const history = useHistory();
  const videoRef = useRef(null);

  let {id} = useParams();
  id = toNumber(id);

  const {runTime, videoLink} = getArrayItem(films, id);

  useEffect(() => {
    if (playerState.isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [playerState.isPlaying]);

  const exitClickHandler = () => {
    history.goBack();
  };

  const onTimeUpdateHandler = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;

    setPlayerState({
      ...playerState,
      progress
    });
  };

  const videoProgressHandler = (evt) => {
    const manualChange = Number(evt.target.value);

    videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;

    setPlayerState({
      ...playerState,
      progress: manualChange
    });
  };

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster="img/player-poster.jpg"
        ref={videoRef}
        onTimeUpdate={onTimeUpdateHandler}
      />

      <button type="button"
        className="player__exit"
        onClick={exitClickHandler}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={playerState.progress}
              max="100"
            />
            <div
              className="player__toggler"
              draggable
              style={{left: `${playerState.progress}%`}}
              onChange={(e) => videoProgressHandler(e)} // ?
            >Toggler</div>
          </div>
          <div className="player__time-value">
            {formatToHoursMinutesSeconds(runTime)}
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button"
            className="player__play"
            onClick={() => setPlayerState({
              ...playerState,
              isPlaying: !playerState.isPlaying
            })}
          >
            {
              playerState.isPlaying
                ? <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
                : <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </>
            }
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
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ).isRequired,
};

export default Player;
