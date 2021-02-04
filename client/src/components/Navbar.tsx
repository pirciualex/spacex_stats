import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    });

    return (
        <nav className={`center ${scrolling ? "active" : ""}`}>
            <Link to="/">
                <img src={logo} alt="SpaceX logo" />
            </Link>
        </nav>
    );
};

export default Navbar;
