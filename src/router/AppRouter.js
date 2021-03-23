import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../components/about/about";
import { Home } from "../components/home/home";
import { Experience } from "../components/experience/experience";
import { NavbarRouter } from '../components/navbar/index';
import { Work } from "../components/work/work";

export const AppRouter = () => {
    return (
       
        <Router>
            <NavbarRouter />
            <Home />
            <About />
            <Experience />
            <Work />
        </Router>
       
    );
};
