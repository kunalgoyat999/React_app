import React, {useState, useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooksReducer';
import * as ACTIONS from './store/actions/actions';

//main app 
const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0)

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementGlobalValue = () => {
    setStateGlobal(stateGlobal - 1)
  }

  const handleContextDispacthTrue = () => {
    dispatchContextGlobal(ACTIONS.success())
}

  const handleContextDispacthFalse = () => {
    dispatchContextGlobal(ACTIONS.failure())
  }

    return(
      <div>
      React
      <Context.Provider
      value={{
        valueGlobalState: stateGlobal,
        addGlobalValue: () => incrementGlobalState(),
        decGlobalValue: () => decrementGlobalValue(),

        reducerGlobalState: stateContextGlobal.stateprop2,
        dispatchContextTrue: () => handleContextDispacthTrue(),
        dispatchContextFalse: () => handleContextDispacthFalse
      }}
      >
      <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
