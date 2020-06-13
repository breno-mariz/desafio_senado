import React, { Component } from 'react';

import './BaseLayout.scss'

class BaseLayout extends Component {

    render () {
        return (
            <div className="BaseLayout">
                <main >
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default BaseLayout;