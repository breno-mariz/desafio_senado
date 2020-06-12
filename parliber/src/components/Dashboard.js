import React, { Component } from 'react';
import axios from 'axios';
import Parlamentar from './Parlamentar/Parlamentar.js';

// import ListGroup from 'react-bootstrap/ListGroup'
import './Dashboard.scss'

class Dashboard extends Component{

    state = {
        senadors: [],
        loading: false
    }

    componentDidMount () {
        axios.get( 'http://legis.senado.leg.br/dadosabertos/senador/lista/atual.json' )
            .then( response => {
                this.setState( { senadors: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar } );

                console.log('vish mainha', this.state.senadors);
            } );
    }

    render () {

        return(
            <div>
                <h3>Dashboard</h3>
                <section className="ListaParlamentars">
                    {this.state.senadors.map(parlamentar => {
                        return (
                            <Parlamentar 
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

export default Dashboard;