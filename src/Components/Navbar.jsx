import { useRef } from "react";
import {Link} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css"
import {BsHandbag} from "react-icons/bs"
// import {BiSearch} from "react-icons/bi"
import {IoPersonOutline} from "react-icons/io5"
import { Icon } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"
export const Navbar = () =>{
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="lodo">SOFA</h3>
			<div className="secNav">
			<nav ref={navRef}>
				<Link to="/about" id="home">ABOUT</Link>
                <div className="blackDot"></div>
				<Link  to="/men" id="about" className="about section" >MEN</Link>
                <div className="blackDot"></div>
				<Link to="/women" id="skills">WOMEN</Link>
                <div className="blackDot"></div>
				<Link to="/shop" id="projects">SHOP</Link>
                
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

