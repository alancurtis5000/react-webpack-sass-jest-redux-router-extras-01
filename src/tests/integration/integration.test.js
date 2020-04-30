import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchPosts } from '../../actions/post';

const createMockStore = configureMockStore([thunk]);
const defaultState = { posts:[] };

describe('fetchPost action', ()=>{
  beforeEach(()=>{
    moxios.install();
  });
  afterEach(()=>{
    moxios.uninstall();
  });

  test('Store is updated Correctly', ()=>{
    const expectedState = [
      {
        title:'Example title  1',
        body: 'Some Text'
      },
      {
        title:'Example title  2',
        body: 'Some Text'
      },
      {
        title:'Example title  3',
        body: 'Some Text'
      }
    ]
    let store = createMockStore(defaultState);

    moxios.wait(()=>{
     const request = moxios.requests.mostRecent();
     request.respondWith({
       status:200,
      //  response: []
       respose: expectedState,
     })
    });
    return store.dispatch((dispatch)=>dispatch(fetchPosts()))
    .then(()=>{
      const newState = store.getState()
      console.log({newState:newState.posts});
      expect(1).toBe(2);

    });


    // store.dispatch(startRemoveExpense({id})).then(() => {
    //   const actions = store.getActions();
    //   expect(actions[0]).toEqual({
    //     type:'REMOVE_EXPENSE',
    //     id
    //   });
    //   return database.ref(`users/${uid}expenses/${id}`).once('value')
    // }).then((snapshot) => {
    //   expect(snapshot.val()).toBeFalsy();
    //   done();
    // });
    // return store.dispatch(fetchPosts())
    // .then(()=>{
    //   const newState = store.getState();
    //   console.log({newState, expectedState})
    //   expect(newState.posts).toEqual(expectedState);
    // })

    // console.log(store.getState())

    // store.dispatch(fetchPosts()).then()
    // expect(1).toBe(1);
  });
})