import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import forms from '../fixtures/forms';
import { 
  updateForm,
  clearForm,
  validateForm
} from '../../actions/pageTest';
import pageTestReducer, { initalState } from '../../reducers/pageTest';

const createMockStore = configureMockStore([thunk]);
const defaultPageTestState = { form:{initalState} };

test('should clear form', ()=>{
  const action = clearForm();
  expect(action).toEqual({
    type: 'CLEAR_FORM',
    payload: {} 
  });
});

test('should update form', () => {
  const id = forms.firstName.firstName.id;
  const value = forms.firstName.firstName.value;
  const action = updateForm(id, value);

  const state = pageTestReducer(initalState, action);
  expect(state).toEqual(forms.firstName);
});

test('valid form should reset to default', ()=>{
  const action = validateForm(forms.validForm);
  const state = pageTestReducer(initalState, action);
  expect(state).toEqual(initalState);
});

test('invalid form should get set errors', ()=>{
  const action = validateForm(forms.invalidForm);
  const state = pageTestReducer(initalState, action);

  expect(state).toEqual(forms.invalidFormExpected);
});