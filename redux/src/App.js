import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { decrementAction, incrementAction } from './store/countReducer';
import { removeUsersAction } from './store/userReducer';

function App() {
  const dispatch = useDispatch()

  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  console.log(count, users)



  return (

    <div>

      <div>{count}</div>
      <button onClick={() => dispatch(incrementAction())}>Add count</button>
      <button onClick={() => dispatch(decrementAction())}>Get count</button>

      <div>
        <button>Add Users</button>

        <div>{users.map(user => 
          <div className='customer' 
                key={user.id} 
                onClick={() => dispatch(removeUsersAction(user.id))}
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
