import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {AppRoute, AuthorizationStatus} from '../../common/const';

const PrivateRoute = ({render, path, exact, authStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    authStatus: state.user.authorizationStatus,
  };
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  render: PropTypes.func,
  exact: PropTypes.bool,
  authStatus: PropTypes.oneOf(
      [AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]
  ),
};

export default connect(mapStateToProps)(PrivateRoute);
