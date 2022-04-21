import { faBlackberry } from '@fortawesome/free-brands-svg-icons'
import React,{useState} from 'react'
import "./memberSide.scss"
export default function MemberSide({ select, setSelect, selectStudent, setSelectStudent} ) {


 //  const [selectStudent,setSelectStudent]=useState('Ph.D course')
  const clickPro = () => {
    setSelect('Professor') 
   
  }

  const clickStu = () => {
    setSelect('Student')
    setSelectStudent('')
  
  }
  const clickphd = () => {
    setSelectStudent('Ph.D course')
  
  }
  const clickmsph = () => {
    setSelectStudent('MS/Ph.D course')
  
  }
  const clickms = () => {
    setSelectStudent('MS course')
  
  }
  const clickintern = () => {
    setSelectStudent('Intern')
  
  }

  const clickStaffs=()=>{
    setSelect('Staffs')
  
  }
  

  const clickAlu = () => {
    setSelect('Alumni')
  
  }
  


  return (
    <div className="memberSide">
      
       <div className='title_member'>
          Members
        <div className="title_border">
            <div className="title_left">
              
            </div>
            <div className="title_right">
              
            </div>
        </div>  
         
       </div>

      <div className="memberList">
        <div className="memberside-container">
        <ul className="memberContent">
          <li className="memberListItem" onClick={clickPro} style={{color: select === 'Professor' ? 'black' : 'grey'}} >Professor</li>
          <li className="memberListItem" onClick={clickStu} style={{marginBottom: select === 'Student'  ? 20 : 33, color: select === 'Student' ? 'black' : 'grey'}} >Students</li>
            {select === 'Student' ? 
            <>
            <li className="memberSmallItem" onClick={clickphd} style={{ color: selectStudent === 'Ph.D course' ? 'black' : 'grey'}} >- Ph.D course</li>
            <li className="memberSmallItem" onClick={clickmsph} style={{ color: selectStudent === 'MS/Ph.D course' ? 'black' : 'grey'}} >- MS/Ph.D course</li>
            <li className="memberSmallItem" onClick={clickms} style={{ color: selectStudent === 'MS course' ? 'black' : 'grey'}} >- MS course</li>
            <li className="memberSmallItem" onClick={clickintern} style={{ color: selectStudent === 'Intern' ? 'black' : 'grey'}} >- Intern</li>
            </>
            :
            null
  }


          <li className="memberListItem" onClick={clickStaffs}style={{color: select === 'Staffs' ? 'black' : 'grey'}}>Staffs</li>
          <li className="memberListItem" onClick={clickAlu} style={{color: select === 'Alumni' ? 'black' : 'grey'}}>Alumni</li>
        </ul>
        </div>
      </div>

    </div>
  )
}
