import React from 'react';
import Dashboard from '../../Dashboard';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import './Navbar.scss';

const Navbar = ( props ) => (
    <header className="Navbar">
        <Tabs className="device-small" defaultActiveKey="senadors" id="navbar-tabs">
            <Tab eventKey="senadors" title="Senadores">
                <div className="div-1">
                    div 1
                    <Dashboard/>
                </div>
            </Tab>
            <Tab eventKey="deputados" title="Deputados">
                <div className="div-2">
                    div 2
                    <Dashboard/>
                </div>
            </Tab>
        </Tabs>
    </header>
);

export default Navbar;