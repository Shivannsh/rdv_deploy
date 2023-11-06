import "./faqs.css";
import React, { useState } from "react";

function Accordion({ items }: any) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="faqs-acco-boss">
      {items.map((item: any, index: any) => (
        <div key={item.title} className="faqs-acco-subboss">
          <input
            type="radio"
            className="faqs-acco-input"
            name="radio-btn"
            id={`s${item.id}`}
          />
          <button
            className="faqs-acco-btn"
            id={item.id}
            onClick={() => handleClick(index)}
          >
            <label htmlFor={`s${item.id}`} className="faqs-acco-box">
              <strong>{item.title}</strong>
            </label>
            {index === activeIndex ? (
              <div className="faqs-down-arrow faqs-arrow"></div>
            ) : (
              <div className="faqs-right-arrow faqs-arrow"></div>
            )}
          </button>
          <div className="faqs-acco-content-boss faqs-acco-down">
            {index === activeIndex && (
              <div className="faqs-acco-content">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Accordion;
