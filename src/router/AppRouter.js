import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../components/about/about";
import { Home } from "../components/home/home";
import { Experience } from "../components/experience/experience";
import { NavbarRouter } from '../components/navbar/index';
import { Work } from "../components/work/work";
import { OtherProyects } from "../components/proyects/OtherProyects";

export const AppRouter = () => {
    return (
       
        <Router>
            <NavbarRouter />
            <Home />
            <About />
            <Experience />
            <Work />
            <OtherProyects />
        </Router>
       
    );
};
