import React from "react";
import "./why_choose_us.css";
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
						<b className="past-experience">
							Experienced Consultants
						</b>
						<div className="our-team-has">
							Our team consists of experienced consultants who
							have a deep understanding of web3 technologies and
							the latest industry trends. We'll match you with a
							consultant who has the expertise that you need to
							achieve your desired outcomes.
						</div>
						<img
							className="icon-holder"
							alt=""
							src={icon_holder1}
						/>
					</div>
					<div className="key-factors">
						<b className="past-experience">
							Comprehensive Services:
						</b>
						<div className="our-team-has">
							We offer a wide range of consultation services to
							meet your web3 needs. Whether you're a startup
							looking to enter the web3 space or an established
							company looking to expand your web3 initiatives, we
							have the network of experts that you need to
							succeed.
						</div>
						<img
							className="icon-holder"
							alt=""
							src={icon_holder2}
						/>
					</div>
					<div className="key-factors">
						<b className="past-experience">
							Cost-Effective Solutions
						</b>
						<div className="our-team-has">
							By working with our team, you can access top-tier
							web3 consultation services at a fraction of the cost
							of hiring a full-time consultant. We'll connect you
							with the right consultant for your needs, and our
							commission-based model means that you only pay for
							the services that you use.
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
