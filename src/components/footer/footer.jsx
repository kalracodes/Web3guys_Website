import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
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
					<Link to="https://www.instagram.com/theweb3guys/" target="_blank" className="footer-link">
						<img src={facebook} alt="" />
					</Link>
					<Link to="https://www.youtube.com/@theweb3guys" target="_blank" className="footer-link">
						<img src={linkedin} alt="" />
					</Link>
					<Link to ="https://twitter.com/theweb3guys" target="_blank" className="footer-link">
						<img src={twitter} alt="" />
					</Link>
				</div>
			</div>
		</footer>
	);
}

