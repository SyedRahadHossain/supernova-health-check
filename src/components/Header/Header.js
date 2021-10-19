import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} 
                    to="/home#home">Supernova Health Check</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink}
                            className="text-white" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink}
                            className="text-white"
                            to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink}
                            className="text-white"
                            to="/about">About us</Nav.Link>
                        <Nav.Link as={HashLink}
                            className="text-white"
                            to="/membership">Membership</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} className="me-3" variant="light">Logout</Button> :
                            <Nav.Link as={Link}
                                className="text-white"
                                to="/login">Login</Nav.Link>}
                        {user.email &&
                            <Navbar.Text>
                                Hello! <Link className="text-decoration-none" to="/home"> {user?.displayName}</Link>
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;