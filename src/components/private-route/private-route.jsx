import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {AppRoute, AuthStatus} from '../../common/const';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  render: PropTypes.func,
  exact: PropTypes.bool,
};

export default PrivateRoute;
