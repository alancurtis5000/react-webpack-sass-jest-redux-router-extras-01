import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fakeUsersReducer from '../reducers/fakeUsers';
import fakeNewUserReducer from '../reducers/fakeNewUser';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducer,
      fakeNewUser: fakeNewUserReducer,
      fakeUsers: fakeUsersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
