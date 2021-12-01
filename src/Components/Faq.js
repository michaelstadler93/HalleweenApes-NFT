import React from 'react';
import FaqElement from './FaqElement';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';
function Faq(props) {
  const title="FAQ's";
  return  props.faqs ? (
    <div className="text-center p-28 bg-back">
      <img src="images/landing/spider.png"  className="w-28 inline"/>
      <span className="text-4xl redText">{title}</span>
      <img src="images/landing/spider.png"  className="w-28 inline"/>

      {
        props.faqs.map(item=>(
          <FaqElement title={item.title} content={item.content}/>
          
        ))
      }
      
    </div>
  ) : (null)
}

export default Faq;
