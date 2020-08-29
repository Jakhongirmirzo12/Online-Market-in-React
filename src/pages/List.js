import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import './List.css';

function Transform({show}) {
    let drawerClasses = 'side-drawer';
    if(show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <div className={drawerClasses}>
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/Settings">Settings</Link>
                    </li>
                </ul>
            </div>

    );
}

export default Transform;