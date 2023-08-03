import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/website-logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import starsBg from "../../assets/stars-bg@2x.png";
export function Footer() {
	return (
		<footer>
			<div className="footer-stars">
				<img class="stars-bg-footer" alt="" src={starsBg} />
			</div>
			<div className="ctr-footer">
				<div className="talktohuman">
					<div className="talktohumans">
						<div className="talktohumanhead">
							Join Our Newsletter
						</div>
						<div className="talktohumanheader">
							Leave the ordinary behind! Jumpstart your Web3
							adventure by subscribing to our newsletter
						</div>
					</div>
					<form class="cta_talktohuman">
						<input
							disabled=""
							type="email"
							placeholder="Enter your email address"
						/>
						<button disabled="">Subscribe</button>
					</form>
				</div>
			</div>
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
					<Link
						to="https://www.instagram.com/theweb3guys/"
						target="_blank"
						className="footer-link"
					>
						<img src={facebook} alt="" />
					</Link>
					<Link
						to="https://www.youtube.com/@theweb3guys"
						target="_blank"
						className="footer-link"
					>
						<img src={linkedin} alt="" />
					</Link>
					<Link
						to="https://twitter.com/theweb3guys"
						target="_blank"
						className="footer-link"
					>
						<img src={twitter} alt="" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
