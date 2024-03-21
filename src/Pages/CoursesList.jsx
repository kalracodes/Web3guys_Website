import React from "react";
import "./CourseList.css";
import img from "../assets/content.jpeg"
import { Footer } from "../components/footer/footer.jsx";
function CoursesList() {
	return (
		<>
			<div className="courselist-outer">
				<div className="courselist-container">
					<div className="course_list_left_wrapper">
						<div className="courselist-innerwrapper">
							<div className="courselist-header">
								Introduction to Web3
							</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
							<div className="courselist-list">lorem</div>
						</div>
					</div>
					<div className="course_list_right_wrapper">
						<div className="img_wrapper_course_list">
							<img src={img} alt="" class="course_list_img" />
						</div>
						<div className="course_list_title">
							How to Web3
						</div>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/2HiLgjgHI1k" title="How to Web3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframe-course-list"></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default CoursesList;
