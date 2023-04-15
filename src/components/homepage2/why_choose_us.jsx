import React from "react";
import './why_choose_us.css'
import icon_holder1 from "../../assets/icon-holder.svg";
import icon_holder2 from "../../assets/icon-holder1.svg";
import icon_holder3 from "../../assets/icon-holder2.svg";
import starsBg from "../../assets/stars-bg@2x.png";

function WhyChooseUs() {
	return (
		<div>
			<img class="stars-bg-us" alt="" src={starsBg} />
			<div className="why-choose-us">
				<div className="head-subhead" id="head">
					<div className="why-choose-us1">Why Choose Us ?</div>
					<div className="unleash-your-potential">
						Unleash Your Potential with Our Expert Support
					</div>
				</div>
				<div className="key-factors-parent">
					<div className="key-factors">
						<b className="past-experience">Tailored Solutions</b>
						<div className="our-team-has">
							We work closely with each client to understand their
							goals, audience, and budget, and develop a
							customized marketing plan that delivers results.
						</div>
						<img
							className="icon-holder"
							alt=""
							src={icon_holder1}
						/>
					</div>
					<div className="key-factors">
						<b className="past-experience">Community & Engagement</b>
						<div className="our-team-has">
							In the web3 world, community is king. We don't just
							understand this, we're experts at building, growing,
							and engaging communities around your brand.
						</div>
						<img
							className="icon-holder"
							alt=""
							src={icon_holder2}
						/>
					</div>
					<div className="key-factors">
						<b className="past-experience">Innovation & Creativity</b>
						<div className="our-team-has">
							We keep our clients on top of the latest web3 market
							trends, We'll help you stand out by adopting the
							newest technology and social media strategies.
						</div>
						<img
							className="icon-holder"
							alt=""
							src={icon_holder3}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
