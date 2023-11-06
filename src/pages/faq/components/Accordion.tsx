import '../faq.css'
import React, { useState } from 'react';


function Accordion({items}:any) {

   const [activeIndex, setActiveIndex] = useState(-1);
   const handleClick = (index:any) => {
      setActiveIndex(index === activeIndex ? -1 : index);

   };

   return (
      <div className='acco-boss'>
         {items.map((item:any,index:any) => (
            <div key={item.title} className='acco-subboss'>
               <input type='radio' className='acco-input' name='radio-btn' checked={index === activeIndex} id={`s${item.id}`}/>
               <button className='acco-btn' id={item.id} onClick={() =>handleClick(index)}>
                  <label htmlFor={`s${item.id}`} className='acco-box'>
                    <p>{item.title}</p>
                  </label>
               </button>
            {index === activeIndex && <div className='acco-content'><p>{item.content}</p></div>}
            </div>
         ))}
      </div>
   );
}
export default Accordion;
