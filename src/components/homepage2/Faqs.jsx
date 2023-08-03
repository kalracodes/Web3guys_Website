import "./Faqs.css";
import Accordion from "./Accordion";
import starsBg from "../../assets/stars-bg@2x.png";
export default function Faqs() {
	const items = [
		{
			question: "Why shouldn't I just hire a full-time consultant?",
			answer: "Hiring a full-time consultant can be expensive and time-consuming. Our commission-based model allows you to access top-tier web3 consultation services without the commitment of a full-time hire.",
		},
		{
			question: "Why should I choose you?",
			answer: "We offer comprehensive web3 consultation services, connect you with experienced consultants, and provide cost-effective solutions. Our streamlined process ensures that you're matched with the right consultant quickly and efficiently, so you can start working on your web3 initiatives as soon as possible.",
		},
		{
			question: "I dont have a company just a product",
			answer: "Great! We'll make sure we find you someone who suits your needs and help you with your product.",
		},
		{
			question: "How much does your services cost",
			answer: "It depends on what kind of consultation you require and for how long. Just contact us and we'll talk about the cost.",
		},
		{
			question: "What types of web3 consultation services do you provide?",
			answer: "We provide consultation services for a wide range of web3-related topics, including blockchain technology, decentralized finance (DeFi), non-fungible tokens (NFTs), digital identity, and more. Our network of consultants has expertise in various fields of web3 and can provide customized solutions tailored to your unique needs and goals.",
		},
		{
			question: "How do I get started?",
			answer: "Just fill out the form by clicking the button. We have literally put 3 of those on our website :)",
		},
	];

	return (
		<div>
		<div className="faqs-main">
			<img class="stars-bg-faq" alt="" src={starsBg} />
			<h1>Frequently Asked Questions</h1>
			<p>Need Help? We're Here to Support You</p>
			<div className="accordion--container">
				<Accordion class="ac-item" items={items} />
			</div>
		</div>
		</div>
	);
}
