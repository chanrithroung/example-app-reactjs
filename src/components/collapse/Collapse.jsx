import { Navbar, Button } from "react-bootstrap";
import { useNavbarContext } from "./Navbar";
const Collapse = () => {
    const {user, signout} = useNavbarContext();
    return(
        <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text className='bg-primary text-light rounded-pill px-5 me-3'>
            User: {user?.name}
        </Navbar.Text>
        {!user && <Button variant="success" className="px-3"> Login </Button> || <Button variant="outline-danger" onClick={() => signout()} className='px-3'>Sign Out</Button> }
        </Navbar.Collapse>
    );
}

export default Collapse;