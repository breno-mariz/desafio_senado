import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';

import './BaseLayout.scss'
import ListaSenador from '../Parlamentar/ListaSenador';
import ListaDeputado from '../Parlamentar/ListaDeputado';

class BaseLayout extends Component {

    render () {
        return (
            <div className="Main">
                <Header/>
                <main>
                    <br/>
                    <div className="MainPanel">
                        
                        <Switch>
                            <Route path={['/senadores', '/']} exact component={ListaSenador} />
                            <Route path="/deputados" exact component={ListaDeputado} />
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}

export default BaseLayout;