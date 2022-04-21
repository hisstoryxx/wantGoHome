import "./researches.scss";

import researchImg1 from "../img/csd.png"
import researchImg2 from "../img/udu.jpg"
import researchImg3 from "../img/mip.png"
import researchImg4 from "../img/bsp.jpg"
export default function Researches() {
  return (
    <div className="researches">
      <div className="researchesInfo">
         
          <div className="researchesLeft">
                <div className= "titleContainer">
                <span className="researchesTitle">Clinical Study Design</span>

                </div>
                
                <img className="researchesImg" src={researchImg1} alt=""/>
              
         </div>

          <div className="researchesCenter">
               <span className="researchesTitle">UX/UI Design & Usability</span>
              <img className="researchesImg" src={researchImg2} alt=""/>
             
          </div>

          <div className="researchesRight">
            <span className="researchesTitle">Medical Industry Policy</span> 
             <img className="researchesImg" src={researchImg3} alt=""/>  
            
              
          </div>

          <div className="researchesLast">
            <span className="researchesTitle">Bio-Signal Processing & AI</span> 
             <img className="researchesImg" src={researchImg4} alt=""/>  
            
              
          </div>
       
      </div>
    </div>
  )
}
