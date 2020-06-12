import React from 'react';
import Navbar from './navbar/Navbar';

import './BaseUi.scss';

const BaseUi = (props) => (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <main>
                {props.children}
            </main>
        </div>
    </div>
);

export default BaseUi;