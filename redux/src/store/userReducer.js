const defaultState = {
  users: []
}

const SET_USERS = 'SET_USERS'
const REMOVE_USERS = 'REMOVE_USERS'

export default function userReducer(state = defaultState, action) {
  
  switch (action.type) {
  
    case SET_USERS: 
      return {...state, users: [...state.users, ...action.payload]} 
  
    case REMOVE_USERS:
      return {...state, users: state.users.filter(user => user.id !== action.payload)} 
  }
  return state
}

export const addUsersAction = payload => ({type: SET_USERS, payload})
export const removeUsersAction = payload => ({type: REMOVE_USERS, payload})