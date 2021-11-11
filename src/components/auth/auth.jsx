import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import {login} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../common/const';

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const {authorizationStatus} = useSelector(
      (state) => state.USER
  );

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    history.push(AppRoute.ROOT);
  }

  const submitHandler = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })).then(() => history.push(AppRoute.ROOT));
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#"
          className="sign-in__form"
          onSubmit={submitHandler}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="password" placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
