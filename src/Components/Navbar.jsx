import { useRef } from "react";
import {Link} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css"
import {BsHandbag} from "react-icons/bs"
// import {BiSearch} from "react-icons/bi"
import {IoPersonOutline} from "react-icons/io5"
import { Icon } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"
import logo_final from "../images/logo_final.png"
export const Navbar = () =>{
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			
			<Link to="/"> <img className="logo" src={logo_final} /> </Link>

			<div className="secNav">
			<nav ref={navRef}>
				<Link to="/about" >ABOUT</Link>
                <div className="blackDot"></div>
				<Link  to="/men" className="about section" >MEN</Link>
                <div className="blackDot"></div>
				<Link to="/women" >WOMEN</Link>
                <div className="blackDot"></div>
				<Link to="/shop" >SHOP</Link>
				
                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<Icon as={FaTimes} />
				</button>
				
			</nav>
            <div className="navIcons">
                    <SearchIcon/>
                    <Icon as={BsHandbag}/>
                    <Icon as={IoPersonOutline}/>
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

