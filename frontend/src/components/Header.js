import React, { Component } from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap/'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        {/* <Navbar.Brand href="#">Coffe</Navbar.Brand> */}
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/fav">Favorite</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
