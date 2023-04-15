import React from "react";
import "./footer.css";
import logo from "../../assets/website-logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-line-1"></div>
			<div className="foot-desktop">
				<div className="footer-logo">
					<img src={logo} alt="" />
					<span className="footer-logo-name">
						The<strong>WEB3</strong>Guys
					</span>
				</div>
				<div className="footer-copyright-1">
					&copy;2023 TheWeb3Guys. All Rights Reserved
				</div>
				<div className="footer-links">
					<div className="footer-link">
						<img src={facebook} alt="" />
					</div>
					<div className="footer-link">
						<img src={twitter} alt="" />
					</div>
					<div className="footer-link">
						<img src={linkedin} alt="" />
					</div>
				</div>
			</div>
		</footer>
	);
}

