import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {rootReducer} from './store/reducer/rootReducer';
import {createApi} from './services/api';
import {checkAuth} from './store/api-actions';
import {setAuthStatus} from './store/reducer/user/action';
import {AuthorizationStatus} from './common/const';

const api = createApi(
    () => store.dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById(`root`)
);
