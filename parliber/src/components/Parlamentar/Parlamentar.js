import React from 'react';

import './Parlamentar.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const parlamentar = (props) => (

    <Container className="Parlamentar">
        <Row>
            <Col xs="auto">
                <div className="circletag" ><img src={props.foto}/></div>
            </Col>
            <Col >
                <div>{props.nome}</div>
                <div >{props.partido}</div>
                <div >{props.formaTratamento} - {props.uf}</div>
            </Col>
        </Row>
    </Container>
);

export default parlamentar;