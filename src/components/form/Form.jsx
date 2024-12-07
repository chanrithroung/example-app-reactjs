
import Tr from "../tr/Tr";
import { useState } from "react";
import './validation.css';
const Form = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail]       = useState("");
    const [member, setMember]     = useState([]);
    const [id, setid]             = useState(1);
    const [isAdd, setIsAdd]       = useState(true);
    const [updateId, setUpdateId] = useState(0);

    const update = (id) => {
        const user =  member.find(e => e.id = id)
        setUpdateId(id);
        setIsAdd(false);
        setUsername(user.username);
        setEmail(user.email);
    }; 

    const addUser = (e) => {
        e.preventDefault();
        if(!username || !email) return null;
        setMember( [...member, {id, username, email}] );
        setUsername("")
        setEmail("")
        setid(id + 1);
    }

    const updateUser = (event) => {
        event.preventDefault();
        setMember(member.map( e => e.id == updateId ? {id, username, email} : e))
    }

    const deleteUser = (id) => {
        setMember(member.filter(e => e.id !== id));
    }    

    return(
    <div className="container mt-5">
        <div className="row justify-content-center gap-5">
            <div className="col-5 rounded-4 shadow-lg p-5" style={{height: 'fit-content'}}>
                <form action="" onSubmit={isAdd ? addUser : updateUser}>
                    <h1 className="text-center mb-5">Create User</h1>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input required value={username} id="username" onChange={e => {
                            setUsername(e.target.value);
                            if(!e.target.value) e.target.classList.add('invalid');
                            else e.target.classList.remove('invalid');

                            
                        }} className="form-control" type="text" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email ">Email</label>
                        <input value={email} onChange={e => { 
                            setEmail(e.target.value);
                            if(!e.target.value) e.target.classList.add('invalid');
                            else e.target.classList.remove('invalid');
                        }} id="email" className="form-control" type="email" />
                    </div>
                    <div className="py-3 d-grid">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-6 rounded-4 shadow-lg p-5" style={{height: 'fit-content'}}>
                <h2 className="text-center mb-4">User Table</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { member.map(e => <Tr key={e.id} {...e} update={update} deleteUser={deleteUser} /> ) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default Form;    