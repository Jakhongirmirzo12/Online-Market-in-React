import React, {Component} from 'react';
import Aloqa from './images/Aloqa.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

class Contact extends Component {
    render(){
        return(
            <div>
                <img src={Aloqa} className="Aloqa"/>
                
                <div className="Phone">
                <div className="phone1"> 
                    <h1><FontAwesomeIcon icon={faPhone} />
                    <p className="talk"> Talk to Sales </p>
                    <p className="talk2">Interested in DataSite's marketing software? Just pick up the phone to chat with a member of our sales team.</p>
                    <span className="number"><a href="#" id="son">+998996552445</a></span></h1>
                    </div>

                    <div className="inst">
                    <h1><FontAwesomeIcon icon={faInstagram} />
                    <p className="customer">Contact Customer Support </p>
                    <p className="customer2">Sometimes you need a little help from your friends.Or a DataSite support you. Don't worry...we're here for you</p>
                    </h1>

                    <button id="contact">Contact</button>
                    </div>
                    </div>
                    
                </div>
        );
    }
}


export default Contact;