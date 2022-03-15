import React,{useEffect,useState} from 'react'

import "./research.scss"
import ResearchCD from './researchCD/ResearchCD';
import ResearchUD from './researchUD/ResearchUD';
import ResearchMI from './researchMI/ResearchMI';
import ResearchSide from "./researchSide/ResearchSide"
export default function Research() {
  const [select,setSelect]=useState('');
  const [page,setPage]=useState('');

  useEffect(() => {

    if(select === 'MI') {
      setPage('MI')
    } 
    else if (select === 'UD'){
      setPage('UD')
    } 
    else {
      setPage('CD')
    }
  },[select])
    



  return (
    <div className="research">
      <div className="researchLeft">
            <ResearchSide select={select} setSelect={setSelect}/>
      </div>
      {select==="MI"?
      <>
      <div className="researchRight">
        <ResearchMI/>
      </div>
      </>
      :
        select==="UD"?
        <>
          <div className="researchRight">
            <ResearchUD/>
          </div>
        </>
        :
        <>
          <div className="researchRight">
           <ResearchCD/>
          </div>
        </>
      } 
    </div>
  )
}
