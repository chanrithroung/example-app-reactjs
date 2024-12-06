import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyModal from "../modal/Modal";
import { faEdit } from "@fortawesome/free-solid-svg-icons";



const Tr = ({id,username, email, update, deleteUser}) => {
    return(
    <tr> 
        <td>{username}</td>
        <td>{email}</td>
        <td>
            <button onClick={ () => update(id) } className="btn btn-success me-2" > {<FontAwesomeIcon icon={faEdit} />} Edit</button>
            <MyModal id={id} deleteUser={deleteUser} />
            {/* <button onClick={ ()=> deleteUser(id) } className="btn btn-danger">  {<FontAwesomeIcon icon={faTrash} />} Delete</button> */}
        </td>
    </tr>);
}

export default Tr;