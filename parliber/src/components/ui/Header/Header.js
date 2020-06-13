import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
// import 'font-awesome/css/font-awesome.min.css';
import './Header.scss';

const toolbar = ( props ) => (
    <div className="Header">
        <Navbar bg="dark" variant="dark" collapseOnSelect fixed="top" expand="md">
            <Navbar.Brand href="#home">
            <img
                alt="ParLiber"
                src="../../parliber_pill_2.png"
            />{' '} 
            {/* ParLiber */}
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
                    <Nav.Link eventKey="2" href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="light"><FontAwesomeIcon icon={faSearch} /> Buscar</Button>
            </Form>
            <Navbar.Toggle />
        </Navbar>
        {/* <Navbar collapseOnSelect  expand="lg">
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto d-block">
                <Nav.Item>
                    <Nav.Link eventKey="1" as={Link} to="/Home">
                    Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" as={Link} to="/Contant">
                    Page Contant
                    </Nav.Link>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}
    </div>
);

export default toolbar;
