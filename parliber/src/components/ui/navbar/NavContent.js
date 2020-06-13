import React from 'react';
import ListaParlamentar from '../../Parlamentar/ListaParlamentar';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import './NavContent.scss';

const NavContent = ( props ) => {

    let baseTabPanelClass = ['TabPanel'];
    let tabPanelClass = {senadorTab: [...baseTabPanelClass], deputadoTab: [...baseTabPanelClass]};

    
    tabPanelClass[props.tabAtiva].push('TabAtiva');

    // console.log('tabPanelClass depois:', tabPanelClass);

    // console.log('senadorTab join:', tabPanelClass['senadorTab'].join(' '));

    return(
        <Container className="NavContent" fluid>
            <Row noGutters>
                <Col xs={12} md={6} className={tabPanelClass['senadorTab'].join(' ')} id="senadorTabPanel">
                    <div className="div-1">
                        div 1
                        <ListaParlamentar/>
                    </div>
                </Col>
                <Col xs={12} md={6} className={tabPanelClass['deputadoTab'].join(' ')} id="deputadoTabPanel">
                    <div className="div-2">
                        div 2
                        <ListaParlamentar/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NavContent;