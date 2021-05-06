import React, {useState} from 'react';
// import * as ACTIONS from '../store/actions/actions';
// import * as UserReducer from '../store/hooks_state/use_input_hooks_reducer'

const HooksForm = () => {
    const [valueSubmit, setValueSubmit] = useState('')
    const [valueChange, setValueChange] = useState('')

    const handleuseStateChange = (event) => {
        // console.log(event.target.value)
        setValueChange(event.target.value)
    }

    const handleuseStateSubmit = (event) => {
        console.log(event.target.value)
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
    }

    return (
        <div>
            <form onSumbmit = {handleuseStateSubmit}>
                <label>React UseState: </label>
                <input id="useState" type="text" onChange={handleuseStateChange} />
                <button type="submit"> Submit</button>

            </form>
            <div>
                <h2> React useState: </h2>
                <p> Change: {valueChange} </p>
                <p> Submit: {valueSubmit} </p>
            </div>
        </div>
        
    )
}

export default HooksForm;