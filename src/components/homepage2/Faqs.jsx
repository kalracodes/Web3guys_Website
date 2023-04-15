import "./Faqs.css";
import Accordion from "./Accordion";
import starsBg from "../../assets/stars-bg@2x.png";
export default function Faqs() {
	const items = [
		{
			question: "Question 1",
			answer: "Answer 1",
		},
		{
			question: "Question 2",
			answer: "Answer 2",
		},
		{
			question: "Question 3",
			answer: "Answer 3",
		},
		{
			question: "Question 1",
			answer: "Answer 1",
		},
		{
			question: "Question 2",
			answer: "Answer 2",
		},
		{
			question: "Question 3",
			answer: "Answer 3",
		},
	];

	return (
		<div className="faqs-main">
			<img class="stars-bg-faq" alt="" src={starsBg} />
			<h1>Frequently Asked Questions</h1>
			<p>Need Help? We're Here to Support You</p>
			<div className="accordion--container">
				<Accordion class="ac-item" items={items} />
			</div>
		</div>
	);
}
