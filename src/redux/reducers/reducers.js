import actionTypes from '../actionTypes';
import { setLink, setRewards, setUser } from '../actions/actions'

const initialState = {
  rewards: [],
  link: null,
  user: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LINK: {
      return { ...state, link: action.payload }
    }
    case actionTypes.SET_REWARDS: {
      return { ...state, rewards: action.payload }
    }
    case actionTypes.SET_USER: {
      return { ...state, user: action.payload }
    }
    default:
      return state;
  }
}



export const saveLink = async (dispatch, link) => {
  const resp = {
    success:true
  }
  if (resp.success){
    const link = resp.message
    dispatch(setLink(link))
  }
}

export const loadLink = () => async (dispatch) => {
  // Since the test is not meant to evaluate backend skills, I will fetch some dummy data
    // And we will assume that the link does not exists yet.
    // const resp = await fetch('').then(res => res.json())
  const resp = {
    success:false
  }
  if (resp.success) {
    const link = resp.message
    dispatch(setLink(link))
  }
}

export const saveReward = () => {
  const resp = {
    success:true
  }

  // Here would be the post action code
}

export const loadRewards = () => async (dispatch) => {
  const resp = {
    success:true,
    message:[
      { type: 1, username: "Mickey" },
      { type: 2 },
      { type: 3 },
      { type: 1, username: "John" },
      { type: 2 },
      { type: 3 }
    ]
  }
  
  if (resp.success) {
    const rewards = resp.message
    dispatch(setRewards(rewards))
  }
}

// Session user will be handled in the server side
export const loadUser = () => async (dispatch) => {
  const resp = {
    success:true,
    message:{
      username:"David",
      email:"david@email.com"
    }
  }
  if (resp.success) {
    const user = resp.message
    dispatch(setUser(user))
  }
}

