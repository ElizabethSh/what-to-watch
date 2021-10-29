import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';

const UserBlock = (props) => {
  const {authStatus} = props;

  let history = useHistory();

  const avatarClickHandler = () => {
    history.push(AppRoute.MY_LIST);
  };

  return (
    <div className="user-block">
      {
        (authStatus === AuthorizationStatus.AUTH)
          ? (
            <div className="user-block__avatar"
              style={{cursor: `pointer`}}
              onClick={() => avatarClickHandler()}
            >
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          )
          : (
            <Link className="user-block__link"
              to={AppRoute.LOGIN}
            >Sign in</Link>
          )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authStatus: state.user.authorizationStatus,
  };
};

UserBlock.propTypes = {
  authStatus: PropTypes.oneOf(
      [AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]
  ).isRequired,
};

export default connect(mapStateToProps)(UserBlock);
