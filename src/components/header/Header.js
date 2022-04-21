import React from 'react';
import "./header.scss";
import HeaderImg from "../img/main_design_img.png";
import Introduce from '../introduce/Introduce';

export default function Header(){
    return (
        <div className="header">
            <div className='headerTitles'>
                
                <div className="container">
                    <span className="headerTitleSmall">MDDU 의료기기 설계 및 사용적합성 연구실</span>
                    <span className="headerTitleSmaller">Medical Device Design & Usability Lab</span>

                </div>

                
                <img className="headerImg" src={HeaderImg} alt="header"/>

                
                
                    
                
                
                
                
            </div>
              
           <Introduce/>
        </div>
    )
}