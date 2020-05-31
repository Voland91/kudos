import { ADD_HEART, ADD_POST } from './types';

export const addHeart = id => ({
  type: ADD_HEART,
  id,
});

export const addPost = personId => ({
  type: ADD_POST,
  personId,
});
