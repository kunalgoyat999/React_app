import React, {useState, useEffect } from 'react';


//main app 
const HooksConatiner1 = () => {

    // const stateValue = useState(0)[0]
    // const setValue = useState(0)[1]
    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue ] = useState(null)

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

    return(
      <div>
      React Hooks
      <button onClick={ () => incrementValue()}> Inc Local State </button>
      <button onClick={ () => decrementValue()}> Dec Local State </button>
      <button onClick={ () => changeUseEffectValue()}> Change use effect </button>
      <br></br>

      <div>
          <br></br>
              {useEffectValue
              ? <p> {useEffectValue} </p>
              : <p> No Value </p>
               }
          
          <p> Local state: {stateValue} </p>
      </div>
      </div>
    )
}


export default HooksConatiner1;