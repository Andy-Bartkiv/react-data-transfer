import React, { useState } from "react";
import '../styles/Parent.css'
import Child from "./Child";

const Parent = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState( {parent: 'Output from Parent', child: 'Output from Child' });
    // const [dataC, setDataC] = useState('Output from Child');

    const parentToChild = () => {
        setData( { child: data.child, parent :value } );
        setValue('');
        console.log('send down', value, data.parent);
    }

    const cTP = (childData) => {
        console.log('Parent CTP');
        setData( {parent: data.parent, child: childData});
    }

    return (
        <div className = 'parent'>
            <h3> { `child say: ${data.child}` } </h3>
            <input
                value = { value }
                placeholder = { 'parent input' }
                onChange = { event => setValue(event.target.value) } 
            />
            <button onClick = { () => parentToChild() }>to Child</button>
            <Child 
                parentToChild = { data.parent } 
                cTP = { cTP }
            />
        </div>
    )
}

export default Parent;