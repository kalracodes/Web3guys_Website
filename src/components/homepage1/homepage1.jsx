import React from "react";
import { Link } from "react-router-dom";
import "./homepage1.css";
import rightArrow from "../../assets/right_arrow.svg";
import bgElement from "../../assets/bg-elements.svg";
import bgLines from "../../assets/bglines.svg";
import planetGlow from "../../assets/planet-glow.svg";
import planet from "../../assets/planet@2x.png";
import starsBg from "../../assets/stars-bg@2x.png";
import vector1 from "../../assets/vector-1.svg";
import stars from "../../assets/stars.svg";
function Homepage1() {
	return (
		<div>
			<div class="hero-section">
				<img class="bg-elements-icon" alt="" src={bgElement} />
				<img class="bglines-icon" alt="" src={bgLines} />
				<img class="stars-bg-icon" alt="" src={starsBg} />
				<img class="planet-glow-icon" alt="" src={planetGlow} />
				<img class="planet-icon" alt="" src={planet} />
				<div class="from-ideation-to-container">
					<p class="from-ideation-to">
						Transform your web3 business with our expert
						consultation services. Our experienced team specializes
						in blockchain, crypto, DeFi, NFTs, and more. You are
						just a button away from reaching the potential of your
						company
					</p>
				</div>
				<div class="cta1">
					<div class="s-cta">
						<Link to="/about" class="content">
							Know More
						</Link>
					</div>
					<div class="p-cta1">
						<div class="content-grow">Ready To Grow</div>
						<img
							class="arrow-drop-right-line-1-icon"
							alt=""
							src={rightArrow}
						/>
					</div>
				</div>
				<img class="stars-icon" alt="" src={stars} />
				<img class="hero-section-child" alt="" src={vector1} />
				<div class="disrupt-the-web-container">
					<p class="from-ideation-to">Power Your Web3</p>
					<p class="from-ideation-to">Innovations with Our</p>
					<p class="from-ideation-to">World-Class Consultation Services</p>
				</div>
			</div>
		</div>
	);
}

export default Homepage1;
