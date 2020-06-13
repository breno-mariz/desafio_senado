import React, { Component } from 'react';
import axios from 'axios';
import Parlamentar from './Parlamentar.js';
import ParlamentarDetalhe from './ParlamentarDetalhe';

// import ListGroup from 'react-bootstrap/ListGroup'
import './ListaParlamentar.scss'

class ListaParlamentar extends Component{

    state = {
        senadors: [],
        loading: false,
        exibirDetalhe: false,
        chaveParlamentarSelecionado: null,
    }

    componentDidMount () {
        axios.get( 'http://legis.senado.leg.br/dadosabertos/senador/lista/atual.json' )
            .then( response => {
                this.setState( { senadors: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar } );

                console.log('vish mainha', this.state.senadors);
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

        return(
            <div>
                <h3>ListaParlamentar</h3>
                <ParlamentarDetalhe 
                    show={this.state.exibirDetalhe} 
                    onHide={() => this.setExibirDetalhe(false)}
                    CodigoParlamentar={this.state.chaveParlamentarSelecionado}/>
                <section className="ListaParlamentar">
                    {this.state.senadors.map(parlamentar => {
                        return (
                            <Parlamentar  clickHandler={() => this.exibirDetalhe(parlamentar.IdentificacaoParlamentar.CodigoParlamentar)}
                                key={parlamentar.IdentificacaoParlamentar.CodigoParlamentar} 
                                nome={parlamentar.IdentificacaoParlamentar.NomeParlamentar} 
                                partido={parlamentar.IdentificacaoParlamentar.SiglaPartidoParlamentar}
                                formaTratamento={parlamentar.IdentificacaoParlamentar.FormaTratamento}
                                uf={parlamentar.IdentificacaoParlamentar.UfParlamentar}
                                foto={parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar}/>
                        )
                    })}
                </section>
            </div>
        )
    }

}

export default ListaParlamentar;