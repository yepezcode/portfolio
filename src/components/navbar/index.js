import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../about/about";
import { Home } from "../home/home";
// import { About } from "../components/about/about";
// import { Contact } from "../components/contact/contact";
// import { Experience } from "../components/experience/experience";
import { Navbar } from "../navbar/Navbar";
// import { Work } from "../components/work/work";
//
export const NavbarRouter = () => {
    return (
        <>
            
            <Router>
                <Navbar />
                <Switch>
                    <Route path='home'  component={ Home } />
                    <Route exact path='about' component={ About } /> 
                </Switch>
            </Router>
        </>
    );
};
