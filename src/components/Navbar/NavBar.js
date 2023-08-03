import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/website-logo.svg";

function NavBar() {
	const [click, setClick] = useState(false);

	const [walletAddress, setWalletAddress] = useState("");

  const [walletConnect,setWalletConnect] = useState(false);

	useEffect(() => {
		getCurrentWalletConnected();
		addWalletListener();
	}, [walletAddress]);

	const connectWallet = async () => {
		if (
			typeof window != "undefined" &&
			typeof window.ethereum != "undefined"
		) {
			try {
				/* MetaMask is installed */
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				setWalletAddress(accounts[0]);
				console.log(accounts[0]);
			} catch (err) {
				console.error(err.message);
			}
		} else {
			/* MetaMask is not installed */
			console.log("Please install MetaMask");
		}
	};

	const getCurrentWalletConnected = async () => {
		if (
			typeof window != "undefined" &&
			typeof window.ethereum != "undefined"
		) {
			try {
				const accounts = await window.ethereum.request({
					method: "eth_accounts",
				});
				if (accounts.length > 0) {
					setWalletAddress(accounts[0]);
					console.log(accounts[0]);
				} else {
					console.log("Connect to MetaMask using the Connect button");
				}
			} catch (err) {
				console.error(err.message);
			}
		} else {
			/* MetaMask is not installed */
			console.log("Please install MetaMask");
		}
	};

	const addWalletListener = async () => {
		if (
			typeof window != "undefined" &&
			typeof window.ethereum != "undefined"
		) {
			window.ethereum.on("accountsChanged", (accounts) => {
				setWalletAddress(accounts[0]);
				console.log(accounts[0]);
			});
		} else {
			/* MetaMask is not installed */
			setWalletAddress("");
			console.log("Please install MetaMask");
		}
	};

	const handleClick = () => setClick(!click);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						<img src={logo} alt="" />
						<span className="nav-logo-name">
							The<strong>WEB3</strong>Guys
						</span>
					</NavLink>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/courses"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Courses
							</NavLink>
						</li>
					</ul>
					<button className="nav-ctf" onClick={connectWallet}>
						<span className="is-link has-text-weight-bold">
							{walletAddress && walletAddress.length > 0
								? `Connected: ${walletAddress.substring(
										0,
										6
								  )}...${walletAddress.substring(38)}`
								: "Connect Wallet"}
						</span>
					</button>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
