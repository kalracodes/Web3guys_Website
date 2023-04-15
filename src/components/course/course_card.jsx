import React from "react";
import web3sampleimg from "../../assets/web3sampleimg.webp";
import dot from "../../assets/dot.svg";
import "./course_card.css"
import rightArrow from "../../assets/right_arrow.svg"
function CourseCard(props) {
	return (
		<div>
			<div className="CourseCard">
				<div className="Courseimg">
					<img src={web3sampleimg} alt="" />
				</div>
				<div className="CourseText">
					<div className="CourseHeader">{props.Title}</div>
					<div className="CourseTags">
						{props.tags.map((element) => {
							return <div className="CourseTag">{element}</div>;
						})}
					</div>
				</div>
                <div className="CourseDetails">
                    <div className="Courselectures">12 Lessons</div>
                    <img src={dot} alt="" />
                    <div className="Courselevel">Beginner</div>
                </div>
				<button className="CourseCTA" >Start Learning
				<img src={rightArrow} alt="" /></button>
			</div>
		</div>
	);
}

export default CourseCard;
