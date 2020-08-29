import React from 'react';
import './Learning.css';
import Image5 from '../images/img5.jpg';
import Image6 from '../images/img6.jpg';
import Image7 from '../images/img7.jpg';
import Image8 from '../images/img8.jpg';

 
function Learning() {
    return (
        <div className="learning" >
            <div className="buth">
            <button>hover</button>
            </div>

            <div className="story">
             <img src={Image5} className="story1" />
             <img src={Image6} className="story2" />
             <img src={Image7} className="story3" />
             <img src={Image8} className="story4" />
                </div>
            </div>
    )
}

export default Learning;