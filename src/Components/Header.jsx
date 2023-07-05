import React, { Fragment } from "react"
import {Container , Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({SelectorMenu}) => {

    function seleccionarMenu(menu){
        SelectorMenu(menu)
    }
    
    return(
    <Fragment>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">MrkUltra</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>seleccionarMenu("home")}>Home</Nav.Link>
                    <Nav.Link onClick={()=>seleccionarMenu("DNS")}>Geolocalizacion de Dominio</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </Fragment>)
}
export default Header