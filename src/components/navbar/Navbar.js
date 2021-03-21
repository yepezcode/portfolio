import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-name" onClick={closeMobileMenu}>
                        {"<Mauricio/>"}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fa fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-items'>
                            <Link
                                to="/about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                                </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to=""
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to=""
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Work
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to=""
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Resume</Button>}
                </div>
            </nav>
        </>
    );
};

