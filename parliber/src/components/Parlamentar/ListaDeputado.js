import React, { Component } from 'react';
import axios from 'axios';
import Parlamentar from './Parlamentar.js';
import Loader from '../ui/loader/Loader';

// import ListGroup from 'react-bootstrap/ListGroup'
import './ListaParlamentar.scss'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class ListaDeputado extends Component{

    state = {
        deputados: [],
        carregando: false,
        exibirDetalhe: false,
        chaveParlamentarSelecionado: null,
    }

    componentDidMount () {
        this.setState( { carregando: true } );

        axios.get( 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome' )
            .then( response => {
                this.setState( { deputados: response.data.dados } );

                this.setState( { carregando: false } );
                console.log('vish mainha', this.state.deputados);
            } );
    }

    setExibirDetalhe = (exibir) => {
        this.setState( { exibirDetalhe: exibir } );

        console.log('rapaz', this.state.exibirDetalhe);
    };

    exibirDetalhe = (chave) => {
        this.setExibirDetalhe(true);

        this.setState( { chaveParlamentarSelecionado: chave } );
    }

    render () {
        let objetoLista = null;
        if(this.state.carregando){
            objetoLista = <Loader/>;
        } else {
            objetoLista = (
                <section>
                    {this.state.deputados.map(deputado => {
                        return (
                            <Parlamentar  clickHandler={() => this.exibirDetalhe(deputado.id)}
                                key={deputado.id} 
                                nome={deputado.nome} 
                                partido={deputado.siglaPartido} 
                                formaTratamento={'Senador(a)'} 
                                uf={deputado.siglaUf} 
                                foto={deputado.urlFoto}/>
                        )
                    })}
                </section>
            );
        }

        console.log('meio', this.state.deputados[0]);

        return(
            <Container className="Deputado">
                <Row className="justify-content-md-center">
                    <Col sm={12} lg={3} >
                        <div className="Filtro ListPanel">
                            <div className="Titulo">Painel filtros</div>
                            <br/>
                        </div>
                    </Col>
                    <Col>
                        <div className="ListaParlamentar ListPanel">
                            <div className="Titulo">Lista Deputados</div>
                            <br/>
                            {objetoLista}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ListaDeputado;