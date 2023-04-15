import React from "react";
import './course.css'
import CourseCard from "./course_card.jsx"; 
function Course() {
	var arrays = ["Web3", "Blockchain", "Crypto"];
	return (
		<div>
			<div className="courseHeader">
				<div className="CourseHead">Free Courses By TheWeb3Guys</div>
                {/* <div className="CourseSearch"></div> */}
			</div>
            <div className="courses">
                <CourseCard tags={arrays}/>
                <CourseCard tags={arrays}/>
                <CourseCard tags={arrays}/>
                <CourseCard tags={arrays}/>
                <CourseCard tags={arrays}/>
                <CourseCard tags={arrays}/>
                <CourseCard tags={arrays}/>
            </div>
		</div>
	);
}

export default Course;
