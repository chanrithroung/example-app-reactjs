import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import reactLogo from '../assets/react.svg';
import Collapse from './Collapse';
import {  createContext, useContext, useState } from 'react';
const navbarContext = createContext();
export const useNavbarContext = () => useContext(navbarContext)
const MyNavbar  = () => {
    const [user, setUser] = useState({name: "Chanrith"});
    const signout = () => {
        setUser(null);
    }
    return ( 
        <navbarContext.Provider value={{user, signout}}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src={reactLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>

                    <Collapse />
                </Container>
            </Navbar>
        </navbarContext.Provider>
    );
}

export default MyNavbar;