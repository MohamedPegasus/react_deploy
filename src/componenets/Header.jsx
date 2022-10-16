import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav ,Container} from 'react-bootstrap';


const Header =()=>{
    return(
        <dev>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">online shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/react_deploy/">Home</Link>
            <Link to="/react_deploy/contact">Contact</Link>
            <Link to="/react_deploy/pricing">Pricing</Link>
          </Nav>
        </Container>
      </Navbar> 
        </dev>
    )
}
export default Header;