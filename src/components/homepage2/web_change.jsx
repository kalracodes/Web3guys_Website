import React from "react";
import "./web_change.css";
import planetGlow from "../../assets/planet-glow.svg";
import ethereum from "../../assets/ethereum.svg";
import starsBg from "../../assets/stars-bg@2x.png";
function WebChange() {
	return (
		<>
			<div class="web_change">
				<div className="web_change_left">
					<img
						src={ethereum}
						draggable="false"
						alt=""
						className="ethereum"
					/>
					<img src={planetGlow} alt="" className="ethereum_glow" />
				</div>
				<div className="web_change_right">
					<h1>Web3 changes everything</h1>
                    <div className="web_change_subhead">
                    There is a tremendous opportunity to create incredible NFTs, DAOs & social tokens, but it's difficult to understand and execute.
                    </div>
                    <div className="web_change_subsubhead">I created this course & community to equip the next generation of Web3 builders.</div>
				</div>
				<div className="CustomerStar">
					<img class="stars-bg-webchange" alt="" src={starsBg} />
				</div>
			</div>
		</>
	);
}

export default WebChange;
