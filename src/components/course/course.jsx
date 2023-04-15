import React from "react";
import "./course.css";
import CourseCard from "./course_card.jsx";
import web3sampleimg from "../../assets/web3sampleimg.webp";
function Course() {
	var Course = [
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
		{
			arrays: ["Web3", "Blockchain", "Crypto"],
			Title: "Introduction to Blockchain",
			img: web3sampleimg,
			lecture: "12",
			level: "Beginner",
			Url: "https://youtube.com/shorts/2S_OlKtBrHA?feature=share",
		},
	];
	return (
		<div>
			<div className="courseHeader">
				<div className="CourseHead">Free Courses By Us</div>
				{/* <div className="CourseSearch"></div> */}
			</div>
			<div className="courses">
				{Course.map((element) => {
					return (
						<CourseCard
							tags={element.arrays}
							Title={element.Title}
							img={element.img}
							lecture={element.lecture}
							level={element.level}
							Url={element.Url}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Course;
