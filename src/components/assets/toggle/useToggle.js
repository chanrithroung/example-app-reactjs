import { useState } from "react";

const UseToggle = (initialValue) => {
    const [show, setShow] = useState(initialValue);
    return [show, () => { setShow(!show); }];
}

export default UseToggle;