import React ,{useState}from 'react';
import { FaArrowsAltV } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';


function FaqElement(props) {
  const [show,setShow]=useState(false);
  const onToggle=()=>{
    setShow(!show);
  }
  return(
    <div className="px-24 py-8">
      <div className="flex justify-between ">
        <span className="text-3xl  countText ">{props.title}</span>
        <button className="text-3xl  countText "onClick={onToggle}><FaArrowsAltV/></button>
      </div>
      {
        show?
        (<div className="text-2xl text-white border-b border-white p-4 showAni">
            {props.content}
          </div>)
        :(<div className="text-2xl text-white border-b border-white p-4 hideAni">
            {props.content}
          </div>)
          
      }
      
    </div>
  ) 
}
          
        

export default FaqElement;
