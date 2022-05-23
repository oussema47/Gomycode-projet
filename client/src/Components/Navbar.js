import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbare() {
    const [login, setLogin] = React.useState()
    React.useEffect(() => {
        let val = localStorage.getItem("login")
        const role = localStorage.getItem("role")
        console.log(role)
        setLogin(val)
        return () => {
            setLogin();
        };

    }, []);
    return (
        <div>





            <Navbar bg="danger" expand="lg" >


                <Container>



                    <Navbar.Brand> <img src={"https://icon-library.com/images/movie-icon-png/movie-icon-png-2.jpg"} width="50px" heigh="50px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">




                        <Nav className="me-auto">
                            <Nav.Link style={{ color: "#fff" }} as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link style={{ color: "#fff" }} as={Link} to="/movies">
                                Movies
                            </Nav.Link>
                            <Nav.Link style={{ color: "#fff" }} as={Link} to="/add">
                                Add Movie
                            </Nav.Link>
                            <Nav.Link style={{ color: "#fff" }} as={Link} to="/watched">
                                Watched Movies
                            </Nav.Link>
                            <Nav.Link style={{ color: "#fff" }} as={Link} to="/unwatched">
                                Unwatched Movies
                            </Nav.Link>
                            {login === "non" ? <>
                                <Nav.Link style={{ color: "#fff" }} as={Link} to="/login">
                                    Sign In
                                </Nav.Link>
                                <Nav.Link style={{ color: "#fff" }} as={Link} to="/Register">
                                    Sign Up
                                </Nav.Link></> :
                                <><Nav.Link style={{ color: "#fff" }} as={Link} to="/login">
                                    Log out
                                </Nav.Link> </>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbare;