import React,{useState} from 'react'
import ClassCard from './classCard';
import FunctionalCard from './functionalCard';


export default function Cards() {
  const [fActive, funcActive] = useState();
  const [cActive, classActive] = useState();
  return (
    <>
    <h1 className='head1'>Styling using Functional and Class Component</h1>
    <div className='center-box'>
        <button className='link' onClick={() => funcActive(!fActive)}>
            To see styling in functional component
        </button>

        <button className='link ink1' onClick={() => classActive(!cActive)}>
            To see styling in class component
        </button>
    </div>
   
   <div className="cards">
      
        {fActive ? <FunctionalCard data={"Functional"}/> : null}
        {cActive ? <ClassCard/> : null}
        
     
   </div>
</>
  )
}
