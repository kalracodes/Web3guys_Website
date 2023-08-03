import React, { useState } from "react";
import downArrow from "../../assets/down-arrow.svg";
import upArrow from "../../assets/up-arrow.svg";
import "./Accordion.css";

export default function Accordion({ items }) {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<>
			{items.map((item, index) => (
				<div
					key={index}
					onClick={() => handleClick(index)}
					className="accordion-container"
				>
					<div className="question-div">
						<div>{item.question}</div>
						<div className="accordion-arrow">
							{activeIndex === index ? (
								<img src={upArrow} alt="" />
							) : (
								<img src={downArrow} alt="" />
							)}
						</div>
					</div>
					{activeIndex === index && (
						<div className="answer-div">{item.answer}</div>
					)}
				</div>
			))}
		</>
	);
}
