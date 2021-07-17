const defaultState = {
  users: []
}

const SET_USERS = 'SET_USERS'
export const FETCH_USERS = 'FETCH_USERS'
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

export const setUsers = payload => ({type: SET_USERS, payload})
export const fetchUsersCreator = () => ({type: FETCH_USERS})
export const removeUsersCreator = payload => ({type: REMOVE_USERS, payload})