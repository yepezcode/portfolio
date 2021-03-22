import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../components/about/about";
import { Home } from "../components/home/home";
// import { About } from "../components/about/about";
// import { Contact } from "../components/contact/contact";
// import { Experience } from "../components/experience/experience";
import { Navbar } from "../components/navbar/Navbar";
// import { Work } from "../components/work/work";
import { NavbarRouter } from '../components/navbar/index';
import { Experience } from "../components/experience/experience";
export const AppRouter = () => {
    return (
       
        <Router>
            <NavbarRouter />
            <Home />
            <About />
            <Experience />
        </Router>
       
    );
};
