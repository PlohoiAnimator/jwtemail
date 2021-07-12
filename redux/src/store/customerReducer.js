const defaultState = {
    customers: []
}

export const customerReducer = (state=defaultState, action) => {
    switch(action.type) {
      case 'ADD_CUSTOMERS':
        return {...state, customer: [state.customers, action.payload]}
    
      case 'GET_CUSTOMERS':
        return {...state, customer: [state.customers, action.payload]}
      
      default:
        return state
      }
  }