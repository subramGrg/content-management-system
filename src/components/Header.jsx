import React from "react";
import { NavLink } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "../styles/header.scss";

const Header = () => (
    <header className="container" styleName="main-nav">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default CSSModules(Header, styles);
