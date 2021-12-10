import React, { useState } from "react";
import '../styles/Child.css'

const Child = (props) => {
    const [value, setValue] = useState('');

    const childToParent = () => {
        console.log(`sendin from Child`, value);
        setValue('');
        props.cTP(value);
    }

    return (
        <div className = 'child'>
            <h3>{ `parent say: ${props.parentToChild}` }</h3>

            <input
                value = { value }
                placeholder = { 'child input' }
                onChange = { event => setValue(event.target.value) } 
            />
            <button onClick = { () => childToParent() }>to Parent</button>
        </div>
    )
}

export default Child;