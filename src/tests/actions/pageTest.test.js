import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import cloneDeep from 'lodash/cloneDeep'
import { 
  updateForm,
  clearForm
} from '../../actions/pageTest';
import pageTestReducer, { initalState } from '../../reducers/pageTest';

const createMockStore = configureMockStore([thunk]);
const defaultPageTestState = { form:{initalState} };

test('should clear form', ()=>{
  const action = clearForm();
  expect(action).toEqual({
    type: 'CLEAR_FORM',
    payload: {} 
  })
});

test('should update form', () => {
  const id = 'firstName'
  const value = 'Charlie'
  const action = updateForm(id, value);

  const state = pageTestReducer(initalState, action);
  let expectedState = cloneDeep(initalState);
  
  const obj =  { ...expectedState[action.payload.id], ["value"]:action.payload.value }
  expectedState =  {...expectedState, [action.payload.id]:obj };

  expect(state).toEqual(expectedState);
});