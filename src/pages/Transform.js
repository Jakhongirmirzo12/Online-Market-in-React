import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './Transform.css';

function Transform({klik}){
    return(
        <div>
            <FontAwesomeIcon icon={faBars}  className="tra" onClick={klik}/>
         </div>
    );
}

export default Transform;