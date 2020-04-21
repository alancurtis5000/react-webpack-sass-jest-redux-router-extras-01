import fakeUsersReducer, {initalState} from '../../reducers/fakeUsers';
import { ADD_NEW_FAKE_USER_TO_USERS } from '../../actions/fakeUsers';
import fakeUsers from '../fixtures/fakeUsers';

test('should start at default state fakeUsersReducer ', ()=>{
  const state = fakeUsersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual(initalState);
});

test('should add a newFakeUser to fakeUsers array', ()=>{
  const newFakeUser = {
    name:{key:'name', value:'Ham', errors:[]},
    email:{key:'email', value:'Ham@email.com', errors:[]}
  };
  const action = {
    type: ADD_NEW_FAKE_USER_TO_USERS,
    payload: newFakeUser
  };

  const state = fakeUsersReducer( fakeUsers, action );
  expect(state).toEqual([...fakeUsers, newFakeUser]);
})

