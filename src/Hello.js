import React from 'react';
const hello=(props)=>{
    return (
        <div>
            <p onClick={props.click}>Hello {props.name} from {props.city}</p>
            {props.children}
        </div>
    )
}
export default hello;