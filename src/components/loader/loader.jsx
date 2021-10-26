import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      <p className="loader__text">Loading...</p>
    </div>
  );
};

export default Loader;
