import React, { Component } from 'react';
import axios from 'axios';
import Parlamentar from './Parlamentar.js';
import Loader from '../ui/loader/Loader';

// import ListGroup from 'react-bootstrap/ListGroup'
import './ListaParlamentar.scss'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class ListaSenador extends Component{

    state = {
        senadors: [],
        carregando: false,
        exibirDetalhe: false,
        chaveParlamentarSelecionado: null,
    }

    componentDidMount () {
        this.setState( { carregando: true } );

        axios.get( 'http://legis.senado.leg.br/dadosabertos/senador/lista/atual.json' )
            .then( response => {
                this.setState( { senadors: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar } );

                this.setState( { carregando: false } );
                console.log('vish mainha', this.state.senadors);
            } );
    }

    setExibirDetalhe = (exibir) => {
        this.setState( { exibirDetalhe: exibir } );

        console.log('rapaz', this.state.exibirDetalhe);
    };

    exibirDetalhe = (chave) => {
        this.setExibirDetalhe(true);

        // this.setState( { chaveParlamentarSelecionado: chave } );
        this.props.history.push( '/senador/' + chave );
    }


    render () {
        let objetoLista = null;
        if(this.state.carregando){
            objetoLista = <Loader/>;
        } else {
            objetoLista = (
                <section >
                    {this.state.senadors.map(parlamentar => {
                        return (
                            <Parlamentar  clickHandler={() => this.exibirDetalhe(parlamentar.IdentificacaoParlamentar.CodigoParlamentar)}
                                key={parlamentar.IdentificacaoParlamentar.CodigoParlamentar} 
                                nome={parlamentar.IdentificacaoParlamentar.NomeParlamentar} 
                                partido={parlamentar.IdentificacaoParlamentar.SiglaPartidoParlamentar}
                                formaTratamento={parlamentar.IdentificacaoParlamentar.FormaTratamento}
                                uf={parlamentar.IdentificacaoParlamentar.UfParlamentar}
                                foto={parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar}
                                />
                        )
                    })}
                </section>
            );
        }

        return(
            
            <Container className="Senador">
                <Row className="justify-content-md-center">
                    <Col sm={12} lg={3} >
                        <div className="Filtro ListPanel">
                            <div className="Titulo">Painel filtros</div>
                            <br/>
                        </div>
                    </Col>
                    <Col>
                        <div className="ListaParlamentar ListPanel">
                            <div className="Titulo">Lista Senadores</div>
                            <br/>
                            {objetoLista}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ListaSenador;