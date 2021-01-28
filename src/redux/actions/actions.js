import actionTypes from '../actionTypes';

export const setLink = (link) => ({
  type: actionTypes.SET_LINK,
  payload: link
});

export const setRewards = (rewards) => ({
  type: actionTypes.SET_REWARDS,
  payload: rewards
});

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user
});