import './toggle.css';
import { useEffect, useState } from 'react';


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
    const [toggle, setToggle] = useState(false);

    return <div className="toggle-container">
        {toggle && <Message />}
        <button onClick={()=> setToggle(!toggle) }>Toggle</button>
    </div>
}


export default Toggle;