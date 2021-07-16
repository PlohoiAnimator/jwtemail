import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { removeUsersCreator } from './store/userReducer';
import { asyncDecrementCreator, asyncIncrementCreator } from './store/countReducer';

function App() {
  const dispatch = useDispatch()

  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  console.log(count, users)

  return (

    <div>

      <div>{count}</div>
      <button onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
      <button onClick={() =>dispatch(asyncDecrementCreator())}>Get count</button>-00

      <div>
        <button>Add Users</button>

        <div>{users.map(user => 
          <div className='customer' 
                key={user.id} 
                onClick={() => dispatch(removeUsersCreator(user.id))}
          >
            {user.name}
          </div>  
        )}

        </div>
      </div>
    </div>
  )
}

export default App;
