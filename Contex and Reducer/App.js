import './App.css';
import React , {useReducer} from 'react';
import ContextAndReducer from './Components/ContextAndReducer';

export const UserContext = React.createContext()

const initialvalue = 0

const reducer = (state,action) => {
  switch(action){
      case "increment":
          return  state + 1
      case "decrement":
          return state - 1
      case "reset":
          return initialvalue
      default:
          return state
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialvalue)
  return (
    <div className="App">
      <UserContext.Provider value={{countState : count,countDispatch : dispatch}}>
        <ContextAndReducer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
