import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {AppRoute, AuthStatus} from '../../common/const';
import './user-block.css';

const UserBlock = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const {authorizationStatus, user} = useSelector(
      (state) => state.USER
  );

  const avatarClickHandler = () => {
    history.push(AppRoute.MY_LIST);
  };

  const logoutClickHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="user-block">
      {
        (authorizationStatus === AuthStatus.AUTH)
          ? (
            <>
              <div className="user-block__avatar"
                onClick={() => avatarClickHandler()}
              >
                <img src={user.avatarUrl}
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

export default UserBlock;
