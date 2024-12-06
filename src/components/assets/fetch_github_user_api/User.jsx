import { useEffect, useState } from "react";
import UserCard from "../../UserCard/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const User = () => {
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

    if (isLoading) return <h1>Loading....</h1>;
    if (isError) return <h1>Have something when wrong....</h1>;

    return (
        <div className="container d-flex gap-3 flex-wrap justify-content-center">
            {userArr.map((e) => (
                <UserCard
                    id={e.id}
                    avatar_url={e.avatar_url}
                    login={e.login}
                    html_url={e.html_url}
                />
            ))}
        </div>
    );
};

export default User;
