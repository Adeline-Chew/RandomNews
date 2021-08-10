import React, { useState, useEffect } from "react";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavBtn,
    NavBtnLink,
} from "./NavbarElem";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            window.location.replace("http://localhost:3000/signin");
        } else {
            setLoading(false);
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
                window.location.replace("http://localhost:3000/signin");
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
