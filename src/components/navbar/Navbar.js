import React, { useCallback, useEffect, useState,  } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
//import { Link } from "react-router-dom";
import { Button } from "../button/Button";
export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [scrollpos, setScrollpos] = useState( 0);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    const ScrollToTop = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        showButton();
    }, [])


    window.addEventListener('resize', showButton);
    
    const handleScroll = useCallback(() =>   {
        const currentScrollPos = window.pageYOffset;
        
        if( scrollpos > currentScrollPos  ) {
           document.getElementsByClassName("navbar")[0].style.top = "0px";   
        } else {
            document.getElementsByClassName("navbar")[0].style.top = "-80px";   
        }
    
          setScrollpos(currentScrollPos);
    }, [scrollpos])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll );
        return () => {
            window.removeEventListener('scroll', handleScroll )
        }
    }, [scrollpos, handleScroll , ]);


    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container">
                    <Link  to="/" className="navbar-name" onClick={closeMobileMenu}
                    >
                     <p onClick={ ScrollToTop }> {"<Mauricio/>"}</p> 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fa fa-bars"} />
                    </div>
                
                    <ul className={click ? "nav-menu active-menu" : "nav-menu"}>
                        <li className='nav-items'>
                            <Link
                                to="about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to="experience"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                spy={true}
                                smooth={true}
                                offset={200}
                                duration={500}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to="work"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                            >
                                Work
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to="contact"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                spy={true}
                                smooth={true}
                                offset={100}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button target="_blank"  rel="noreferrer" href="./resume.pdf" buttonStyle='btn--outline'>
                       Resume
                    </Button>}
                </div>
            </nav>
        </>
    );
};

