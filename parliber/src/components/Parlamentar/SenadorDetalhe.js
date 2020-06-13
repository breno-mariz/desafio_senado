import React, { Component } from 'react';

import axios from 'axios';

class SenadorDetalhe extends Component{

    state = {
        senador: null,
        carregando: false
    }

    componentDidMount () {
        this.setState( { carregando: true } );

        axios.get( 'http://legis.senado.leg.br/dadosabertos/senador/' + this.props.match.params.id + '.json')
            .then( response => {
                this.setState( { senador: response.data.DetalheParlamentar.Parlamentar} );

                this.setState( { carregando: false } );
                console.log('vish mainha', this.state.senador);
            } );
    }

    render () {
        return(
            <div>
                opaaaaaaaaaaa
            </div>
        );
    }
}

export default SenadorDetalhe;