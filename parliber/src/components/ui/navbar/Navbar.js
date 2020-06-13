import React ,{useState} from 'react';
import Dashboard from './NavContent';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import './Navbar.scss';

const Navbar = ( props ) => {

    return(
        <header className="Navbar">
            <Nav variant="tabs" defaultActiveKey="senadorTab" onSelect={props.handleTabSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="senadorTab">Senadores</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="deputadoTab">Deputados</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    );
};

export default Navbar;