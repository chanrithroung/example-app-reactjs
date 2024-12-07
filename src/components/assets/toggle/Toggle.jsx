import './toggle.css';
import { useEffect, useState } from 'react';
import UseToggle from './useToggle';


const Message = () =>  {
    useEffect( () => {
        const clear = setInterval( () => {
            console.log("useEffect");
        }, 1000);
        return () => {
            clearInterval(clear);
        }
    }, []);
    return <button className='btn-message'>
        Message...
    </button>
}

const Toggle = () => {
    const [toggle, trigger] = UseToggle(false);

    return <div className="toggle-container">
        {toggle && <Message />}
        <button onClick={()=> trigger()  }>Toggle</button>
    </div>
}


export default Toggle;