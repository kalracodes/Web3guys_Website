import React from "react";
import "./header_course.css";
import rocket from "../../assets/ethereum.svg"
function HeaderCourse() {
	return (
		<>
			<div className="HeaderContainer">
				<div className="HeaderLeft">
					COMPLETE AND STRUCTURED COURSES
				</div>
				<div className="HeaderRight">
                    <img src={rocket} alt="" />
                </div>
			</div>
		</>
	);
}

export default HeaderCourse;
