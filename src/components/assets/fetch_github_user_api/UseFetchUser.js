import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchUser = () => {
    const url = "https://api.github.com/users";
    const [userArr, setUser] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setUser((await axios(url)).data);
                setLoading(false);
            } catch (erorr) {
                console.log("Have something when wrong : ", erorr);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return {
        isLoading, isError, userArr
    };
}

export default UseFetchUser;