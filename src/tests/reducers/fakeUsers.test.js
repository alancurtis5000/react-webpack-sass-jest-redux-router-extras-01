import fakeUsersReducer, {initalState} from '../../reducers/pageTest';

test('test reducer', ()=>{
  console.log("tested a reducer-------------------------------")
  const state = fakeUsersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual(initalState);
});