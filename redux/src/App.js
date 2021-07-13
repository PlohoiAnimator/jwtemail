import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  
  const dispatch = useDispatch()
  
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  
  console.log(cash)
  console.log(customers)

  function addCash(cash) {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  function getCash(cash) {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

function removeCustomer(customer) {
  dispatch(removeCustomerAction(customer.id))
}

  return (
    <div>

      <div>
        <div className='cash'>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))} style={{marginBottom: 50}}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customers</button>
        <button onClick={() => getCash(Number(prompt()))}>Get customers</button>
      </div>

      <div className='cash'>

        {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div key={customer.id} className='customer' onClick={() => removeCustomer(customer)}>{customer.name}</div>  
          )}
        </div>
        :
        <div>
          Нет клиентов
        </div>  
      }
      </div>
    
    </div>
  )
}

export default App;
