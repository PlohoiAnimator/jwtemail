import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  console.log(cash)

  function addCash(cash){
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  function getCash(cash){
    dispatch({type: 'GET_CASH', payload: cash})
  }
  return (
    <div className='container'>

      <div>
        <div className='cash'>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Прибавить</button>
        <button onClick={() => getCash(Number(prompt()))} style={{marginBottom: 50}}>Убавить</button>
        <button onClick={() => getCash(Number(prompt()))}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Убрать клиента</button>
      </div>
    
      {customers.length > 0 ?
      <div>
        {customers.map(customer => 
          <div>{customer.name}</div>  
        )}
      </div>
      :
      <div>
        Клиенты отсутствуют
      </div>  
    }
    </div>
  );
}

export default App;
