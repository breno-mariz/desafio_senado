import React, { Component } from 'react';

import Header from './Header/Header';

import './BaseLayout.scss'

class BaseLayout extends Component {

    render () {
        return (
            <div className="Main">
                <Header/>
                <main>
                    <br/>
                    <div className="MainPanel">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

export default BaseLayout;