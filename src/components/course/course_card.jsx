import React from "react";
import { Link } from 'react-router-dom';
import dot from "../../assets/dot.svg";
import "./course_card.css"
import rightArrow from "../../assets/right_arrow.svg"
function CourseCard(props) {
	return (
		<div>
			<div className="CourseCard">
				<div className="Courseimg">
					<img src={props.img} alt="" />
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
                    <div className="Courselectures">{props.lecture} Lessons</div>
                    <img src={dot} alt="" />
                    <div className="Courselevel">{props.level}</div>
                </div>
				<Link className="CourseCTA" to={props.Url} target="_blank">
					Start Learning
				<img src={rightArrow} alt="" /></Link>
			</div>
		</div>
	);
}

export default CourseCard;
