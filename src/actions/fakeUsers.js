
export const UPDATE_FAKE_USER_NAME = "UPDATE_FAKE_USER_NAME";
export const updateFakeUserName = ( e ) => {
  return {
    type: UPDATE_FAKE_USER_NAME,
    payload: e.target.value
  }
}