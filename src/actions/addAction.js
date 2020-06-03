import { ADD_HEART, ADD_POST } from './types';

export const addHeart = id => ({
  type: ADD_HEART,
  id,
});

export const addPost = (personId, authorId, groupId, postDescription, kudosId, date) => ({
  type: ADD_POST,
  personId,
  authorId,
  groupId,
  postDescription,
  kudosId,
  date,
});
