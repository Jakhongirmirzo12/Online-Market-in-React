import React, { Component } from 'react';
import Slide from './Slide';
import Middle from './middle';
import './Home.css';

class Home extends Component {
    render(){
        return(
        
            <div>
                <div className="lander">
                <h1>Home page</h1>
                   <Slide />
                   <Middle />
                </div>
                </div>
                
        );
    }
}

export default Home;