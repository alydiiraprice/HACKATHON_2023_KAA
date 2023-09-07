import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/journey" activeStyle>
						Journey
					</NavLink>
					<NavLink to="/services" activeStyle>
						Services
					</NavLink>
					<NavLink to="/profile" activeStyle>
						Profile
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;