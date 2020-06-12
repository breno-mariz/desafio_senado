import React from 'react';


const parlamentar = (props) => (
    <article >
        <h1>{props.nome}</h1>
        <div >{props.partido}</div>
        <div >{props.uf}</div>
    </article>
);

export default parlamentar;