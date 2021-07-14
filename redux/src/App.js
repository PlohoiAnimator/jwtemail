import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { decrementCreator, incrementCreator } from './store/countReducer';
import { setUsers } from './store/userReducer';


function App() {
  
  const dispatch = useDispatch()
  
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  return (

    <div>

      <div>{count}</div>
      <button onClick={() => dispatch(incrementCreator())}>Plus</button>
      <button onClick={() => dispatch(decrementCreator())}>Decrement</button>

      <button onClick={() => dispatch(setUsers(prompt()))}>Add user</button>
      <div>{users}</div>
    </div>
  )
}

export default App;
