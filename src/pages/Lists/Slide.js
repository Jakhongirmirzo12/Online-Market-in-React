import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import './Slide.css';
import 'react-slideshow-image/dist/styles.css';
import img4 from './images/workplace.jpg'


const properties = {
    duration: 1000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="slide">
                <img src={img4}  className="bg-Image"/>
            <Slide {...properties}>
                <div className="each-slide">
                 
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
            </div>
    )
}

export default Slideshow;