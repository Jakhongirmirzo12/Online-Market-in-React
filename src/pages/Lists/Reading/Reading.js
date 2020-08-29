import React from 'react';
import './Reading.css';
import Image6 from '../images/img6.jpg';

function Reading(){
    return(
        <div className="Book">

         <button class="button  ">HOVER</button>

         <div class="block-1">
         <div class="element"></div>
         <div class="element-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, laborum!</div>
         <img src={Image6} alt="" width="280px" height="170px" />
         </div>

         <div class="block-2">

        <div class="element"></div>
        <div class="element-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat incidunt nemo porro ratione, suscipit.</div>
        <img src={Image6} alt="" width="330px" height="220px" />

       </div>

       <div class="block-3">

    <div class="element"></div>
    <div class="element-2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi doloribus ipsum iure, iusto nobis quia quibusdam sed ullam? Illum.</div>
    <img src={Image6} alt="" width="380px" height="270px" />


        </div>

            </div>
    );
}
export default Reading;