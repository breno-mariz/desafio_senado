import React from 'react';

import './Parlamentar.scss'

const parlamentar = (props) => (
    <article className="Parlamentar">
        <h1>{props.nome}</h1>
        <div >{props.partido}</div>
        <div >{props.uf}</div>
    </article>
);

export default parlamentar;