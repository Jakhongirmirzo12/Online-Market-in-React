import React, { Component } from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './header.css';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <Link to = "./Login">
                <h3 className="Log">Login</h3></Link>
                <div className="SearchInput"> 
                <input type="search" className="search" placeholder="Search Books" />
                <i ><FontAwesomeIcon icon={faSearch} className="searchIcon"/></i>
                </div>
                </div>
        );
    }
}

export default Header;