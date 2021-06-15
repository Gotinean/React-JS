import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

export function NaviBar() {
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Gotinean Applications</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/weather">WeatherApp</Link></Nav.Link>
                                <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/todo">ToDo</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
        </>
    )
}

export default NaviBar;