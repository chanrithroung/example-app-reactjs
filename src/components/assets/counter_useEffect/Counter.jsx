import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = count;
    });
    
    document.title = count;
    return <button onClick={() => setCount(count + 1)} >{count}</button>;
}

export default Counter;