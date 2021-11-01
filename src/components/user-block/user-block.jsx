import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {userProp} from '../../common/prop-types/user-props';
import './user-block.css';

const UserBlock = (props) => {
  const {authStatus, logOut, userData} = props;

  let history = useHistory();

  const avatarClickHandler = () => {
    history.push(AppRoute.MY_LIST);
  };

  const logoutClickHandler = () => {
    logOut();
  };

  return (
    <div className="user-block">
      {
        (authStatus === AuthorizationStatus.AUTH)
          ? (
            <>
              <div className="user-block__avatar"
                onClick={() => avatarClickHandler()}
              >
                <img src={userData.avatarUrl}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
              <button
                className="user-block__button"
                type="button"
                onClick={logoutClickHandler}
              >Log out</button>
            </>
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
    userData: state.user.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout())
  };
};

UserBlock.propTypes = {
  authStatus: PropTypes.oneOf(
      [AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]
  ).isRequired,
  logOut: PropTypes.func.isRequired,
  userData: PropTypes.shape(userProp)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
