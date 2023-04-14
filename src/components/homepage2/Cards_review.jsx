import React from "react";
import "./Cards_review.css";
// import noise from "../../assets/noise.webp";
function CustomerReviewCards(props) {
	return (
		<div className="reviews">
			<div className="review_text">
				<div className="review_texts">{props.text}</div>
				<div className="review_author">
					<div className="review_author_text">{props.author}</div>
					<div className="review_author_company">{props.company}</div>
				</div>
			</div>
			<div className="review_img">
				<img src={props.imga} alt="" />
			</div>
			<div className="review_quote">
				<div className="review_quote_quote">"</div>
			</div>
			<div className="review_glow">
				<div className="review_glow_glow"></div>
				<div className="review_mask"></div>
			</div>
		</div>
	);
}

export default CustomerReviewCards;
