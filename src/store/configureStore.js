import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fakeUsersReducer from '../reducers/fakeUsers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      fakeUsers: fakeUsersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
