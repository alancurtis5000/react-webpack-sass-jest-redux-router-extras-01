
export const UPDATE_FAKE_NEW_USER_INPUT = "UPDATE_FAKE_NEW_USER_INPUT";
export const CLEAR_FAKE_NEW_USER_INPUT = "CLEAR_FAKE_NEW_USER_INPUT";
export const SET_ERRORS_FAKE_NEW_USER_INPUT = "SET_ERRORS_FAKE_NEW_USER_INPUT";

export const updateFakeNewUserInput = ( e ) => {
  let key = e.target.id;
  let value = e.target.value;

  return {
    type: UPDATE_FAKE_NEW_USER_INPUT,
    payload: {key, value}
  };
}

export const clearFakeNewUserInput = ( ) => {
  return {type: CLEAR_FAKE_NEW_USER_INPUT}
}

export const setErrorsFakeNewUserInput = ( newUser ) => {
  return {
    type: SET_ERRORS_FAKE_NEW_USER_INPUT,
    payload: newUser
  };
}
