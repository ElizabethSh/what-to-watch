import React from 'react';
import Logo from '../logo/logo';

const Footer = () => {
  const className = `logo__link--light`;

  return (
    <footer className="page-footer">
      <Logo
        className = {className}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
