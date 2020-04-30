import { types } from '../../actions/post';
import postsReducer from '../../reducers/posts';

describe('Posts Reducer', ()=>{
  test('Should return default state', ()=>{
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test('Should Return new state  if receiving type', ()=>{
   const posts = [{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}];
   const newState = postsReducer(undefined, {
     type: types.GET_POSTS,
     payload: posts
   });
   expect(newState).toEqual(posts);
  });
});