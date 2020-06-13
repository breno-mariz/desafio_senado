import React, { Component } from 'react';
import axios from 'axios';
import Parlamentar from './Parlamentar.js';
import ParlamentarDetalhe from './ParlamentarDetalhe';
import Loader from '../ui/loader/Loader';

// import ListGroup from 'react-bootstrap/ListGroup'
import './ListaParlamentar.scss'

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
                <section className="ListaParlamentar">
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
            <div>
                <h3>Lista Deputados</h3>
                <ParlamentarDetalhe 
                    show={this.state.exibirDetalhe} 
                    onHide={() => this.setExibirDetalhe(false)}
                    CodigoParlamentar={this.state.chaveParlamentarSelecionado}/>
                
                {objetoLista}
            </div>
        )
    }

}

export default ListaDeputado;