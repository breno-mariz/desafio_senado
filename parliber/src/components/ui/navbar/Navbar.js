import React ,{useState} from 'react';
import Dashboard from '../../Dashboard';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import './Navbar.scss';

const Navbar = ( props ) => {

    const [tabAtiva, setTabAtiva] = useState('senadorTab');

    const handleTabSelect = (tabSelecionada) => {
        alert(`selected ${tabSelecionada}`);
        if (tabSelecionada){
            setTabAtiva(tabSelecionada);
        }
    }

    let baseTabPanelClass = ['TabPanel'];
    let tabPanelClass = {senadorTab: [...baseTabPanelClass], deputadoTab: [...baseTabPanelClass]};
    
    // console.log('tabPanelClass antes:', tabPanelClass);

    // console.log('tabAtiva', tabAtiva);

    // let arrayManeiro = tabPanelClass[tabAtiva];

    // console.log('arrayManeiro', arrayManeiro);

    // arrayManeiro.push('TabAtiva');


    
    tabPanelClass[tabAtiva].push('TabAtiva');

    console.log('tabPanelClass depois:', tabPanelClass);

    console.log('tabPanelClass[\'senadorPanel\'].join(\' \') depois:', tabPanelClass['senadorTab'].join(' '));

    return(
        <Container fluid>
            <header className="Navbar">
                <Nav variant="tabs" defaultActiveKey="senadorTab" onSelect={handleTabSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="senadorTab">Senadores</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="deputadoTab">Deputados</Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>

            <Row className="TabContent" noGutters>
                <Col xs={12} md={6} className={tabPanelClass['senadorTab'].join(' ')} id="senadorTabPanel">
                    <div className="div-1">
                        div 1
                        <Dashboard/>
                    </div>
                </Col>
                <Col xs={12} md={6} className={tabPanelClass['deputadoTab'].join(' ')} id="deputadoTabPanel">
                    <div className="div-2">
                        div 2
                        <Dashboard/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar;