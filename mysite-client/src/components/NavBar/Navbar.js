import React, { useState, useEffect } from "react";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavBtn,
    NavBtnLink,
    NavMenu,
    NavItem,
    NavLinks
} from "./NavbarElem";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            window.location.replace("http://localhost:3000/");
        } 
    }, []);

    // Handle user log out
    const handleLogout = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:8000/api/authlogout/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.clear();
                window.location.replace("http://localhost:3000/");
            });
    };

    useEffect(() => {
        // get token if the user is logged in
        if (localStorage.getItem("token") !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>RandomNews</NavLogo>
                    <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="/dashboard"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80} //height of navbar
                                >
                                    Hot
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/technology" 
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>Technology</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/entertainment" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>Entertainment</NavLinks>
                            </NavItem>
                        </NavMenu>
                    {/* Insert log out button here */}
                    {isAuth && (
                        <NavBtn>
                            <NavBtnLink onClick={handleLogout}>Log Out</NavBtnLink>
                        </NavBtn>
                    )}
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
