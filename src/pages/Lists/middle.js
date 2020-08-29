import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import './middle.css';

function Middle() {

        return(
            <div>
            <Link to = './learning' className="link"> 
            <div  className="Working">
                <p>Learning</p>
                </div>
                </Link>

                <Link to = './audio' className="link"> 
               <div className="Working2">
                <p>Audio</p>
                </div>
                </Link>

                <Link to = './reading' className="link"> 
            <div className="Working3">
                <p>Reading</p>
                </div>
                </Link>
                </div>
                
        )
}
export default Middle;