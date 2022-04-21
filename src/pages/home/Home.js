import React from 'react';
import Header from '../../components/header/Header';
import Researches from '../../components/researches/Researches';

import "./home.scss";
//import Calendar from '../../components/map/Map';


//<Notice/>
//<Calendar/>
export default function Home(){
    return (
      
        <div className="home">
            <Header/>
            <Researches/>
        
        </div>

    )
}