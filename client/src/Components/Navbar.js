import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbare() {
    return (
        <div>





            <Navbar bg="danger" expand="lg" >


                <Container>



                    <Navbar.Brand> <img src={"https://icon-library.com/images/movie-icon-png/movie-icon-png-2.jpg"} width="50px" heigh="50px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">




                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/movies">
                                Movies
                            </Nav.Link>
                            <Nav.Link as={Link} to="/add">
                                Add Movie
                            </Nav.Link>
                            <Nav.Link as={Link} to="/watched">
                                Watched Movies
                            </Nav.Link>
                            <Nav.Link as={Link} to="/unwatched">
                                Unwatched Movies
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Sign In
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Register">
                                Sign Up
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbare;