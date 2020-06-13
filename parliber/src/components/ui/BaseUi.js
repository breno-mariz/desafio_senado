import React ,{useState} from 'react';
import Navbar from './navbar/Navbar';
import NavContent from './navbar/NavContent';

import './BaseUi.scss';

const BaseUi = (props) => {

    const [tabAtiva, setTabAtiva] = useState('senadorTab');

    const handleTabSelect = (tabSelecionada) => {
        alert(`selected ${tabSelecionada}`);
        if (tabSelecionada){
            setTabAtiva(tabSelecionada);
        }
    }

    return (
        <div>
            <Navbar tabAtiva={tabAtiva} handleTabSelect={handleTabSelect}/>
            <NavContent tabAtiva={tabAtiva}/>
        </div>
    );
};

export default BaseUi;