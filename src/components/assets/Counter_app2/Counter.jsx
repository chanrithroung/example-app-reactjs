import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';


const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    useEffect( ()=> {
        document.title = count;
        console.log("useEffect");
    }, [count]);

    return (
        <div className="p-5 shadow w-25 mt-5 mx-auto">
            <h1>{value}</h1>
            <h2>{count}</h2>
            <div className="mb-2">
                <input onChange={e => setValue(e.target.value)} className="form-control" type="text" />
            </div>
            <button onClick={()=> setCount(count + 1)} className="btn btn-primary">
               <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Increment
            </button>
        </div> 
    );
}

export default Counter;