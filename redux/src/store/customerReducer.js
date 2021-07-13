const defaultState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMERS' 
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMERS' 

export function customerReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    default:
      return state
  }
}

export const addCustomerAction = payload => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = payload => ({type: REMOVE_CUSTOMER, payload})