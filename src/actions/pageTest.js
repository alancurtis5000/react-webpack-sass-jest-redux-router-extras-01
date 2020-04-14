
export const CHANGE_TEXT = "CHANGE_TEXT";
export const changeText = (text) => ({
  type: CHANGE_TEXT,
  payload: {text}
});

export const UPDATE_FORM = "UPDATE_FORM";
export const updateForm = ( id, value ) => {
  return {
    type: UPDATE_FORM,
    payload: { id, value }
  }
};