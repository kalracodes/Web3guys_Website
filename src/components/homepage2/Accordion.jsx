import React, { useState } from 'react';
import './Accordion.css'

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)}
        className='accordion-container'>
          <div
            className='question-div'
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className='answer-div'>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
