import React from "react";
import {Navbar, Nav ,Container} from 'react-bootstrap';


const Header =()=>{
    return(
        <dev>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">online shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
        </dev>
    )
}
export default Header;