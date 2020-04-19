
export const ADD_NEW_FAKE_USER_TO_USERS = "ADD_NEW_FAKE_USER_TO_USERS";

export const addNewFakeUserToUsers = (newUser) => {
  let name = newUser.name.value;
  let email = newUser.email.value;
  let newUserObj = {name, email}

  return {
    type: ADD_NEW_FAKE_USER_TO_USERS,
    payload: newUserObj
  };
}
