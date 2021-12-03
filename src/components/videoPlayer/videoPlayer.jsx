import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    poster,
    videoRef,
    onTimeUpdate,
    isMuted,
    isPlaying
  } = props;

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video
      className="player__video"
      src={src}
      poster={poster}
      ref={videoRef}
      onTimeUpdate={onTimeUpdate}
      muted={isMuted}
    />
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  videoRef: PropTypes.object.isRequired,
  onTimeUpdate: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
