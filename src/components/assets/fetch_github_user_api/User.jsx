
import UserCard from "../../UserCard/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
import UseFetchUser from "./UseFetchUser";

const User = () => {
    const {isLoading, isError,  userArr} = UseFetchUser();
    if (isLoading) return <h1>Loading....</h1>;
    if (isError) return <h1>Have something when wrong....</h1>;
    return (
        <div className="container d-flex gap-3 flex-wrap justify-content-center">
            {userArr.map((e) => (
                <UserCard {...e}/>
            ))}
        </div>
    );
};

export default User;
