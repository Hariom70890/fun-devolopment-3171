import { useRef } from "react";
import {NavLink,Link} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css"
import {BsHandbag} from "react-icons/bs"
// import {BiSearch} from "react-icons/bi"
import {IoPersonOutline} from "react-icons/io5"
import { Icon } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"
import styled from "styled-components";
export const Navbar = () =>{
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header style={{zIndex:"5"}}>
			<Link to="/">
			
			<h3 className="lodo">SOFA</h3>
			</Link>
			<div className="secNav">
			<nav ref={navRef}>
				<LINK  to="/about" >ABOUT</LINK>
                <div className="blackDot"></div>
				<LINK  to="/men" className="about section" >MEN</LINK>
                <div className="blackDot"></div>
				<LINK to="/women" >WOMEN</LINK>
                <div className="blackDot"></div>
				<LINK to="/shop" >SHOP</LINK>
				
                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<Icon as={FaTimes} />
				</button>
				
			</nav>
            <div className="navIcons">
                    <SearchIcon/>
                    <Icon as={BsHandbag}/>
					<Link to="/login">
                    <Icon as={IoPersonOutline}/>
					</Link>
                </div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<Icon as={FaBars} size={10}  />
			</button>
			</div>
		</header>
	);
}

const LINK =styled(NavLink)`

&.active{
	padding:5px;
	border-radius:5px;
background-color:black;
color:white;
}

`

