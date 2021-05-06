import React, {useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooksReducer';
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context'

//main app 
const HooksConatiner1 = () => {

    const context = useContext(Context)

    // const stateValue = useState(0)[0]
    // const setValue = useState(0)[1]
    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue ] = useState(null)

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect Works"), 1000) 
    }, [stateValue])

    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeUseEffectValue = () => {
        setUseEffectValue("Some String")
    }

    const handleDispacthTrue = () => {
        dispatch(ACTIONS.success())
    }

    const handleDispacthFalse = () => {
        dispatch(ACTIONS.failure())
    }

    return(
      <div>
      React Hooks
      <button onClick={ () => incrementValue()}> Inc Local State </button>
      <button onClick={ () => decrementValue()}> Dec Local State </button>
      <button onClick={ () => changeUseEffectValue()}> Change use effect </button>
      <button onClick={ () => handleDispacthFalse()}> dispatch false </button>
      <button onClick={ () => handleDispacthTrue()}> dispatch true </button>
      <button onClick={ () => context.addGlobalValue()}> Add Global Value </button>
      <button onClick={ () => context.decGlobalValue()}> Dec Global Value </button>
      <br></br>

      <div>
          <br></br>
              {useEffectValue
              ? <p> {useEffectValue} </p>
              : <p> No Value </p>
               }
          <br></br>
          {state.stateprop1
            ? <p> State prop1 is true</p>
            : <p> State prop1 is false</p>
          }
          <p> Local state: {stateValue} </p>
          <br></br>
          <p> Global State: {context.valueGlobalState}</p>
      </div>
      </div>
    )
}


export default HooksConatiner1;