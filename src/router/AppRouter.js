import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { About } from "../components/about/about";
import { Home } from "../components/home/home";
import { Experience } from "../components/experience/experience";
import { NavbarRouter } from '../components/navbar/index';
import { Work } from "../components/work/work";
import { OtherProyects } from "../components/proyects/OtherProyects";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer/footer";
import { Element } from 'react-scroll';
import { Figures } from "../components/background/figures";
export const AppRouter = () => {
    return (
       <>
        <Router>
            <NavbarRouter />
            <Home />
            <Element  id="about"/>
            <About/>
            <Element  id="experience"/>
            <Experience />
            <Element  id="work"/>
            <Work />
            <OtherProyects />
            <Element  id="contact"/>
            <Contact />
            <Footer />
            
        </Router>
        <Figures />

      </> 
    );
};
