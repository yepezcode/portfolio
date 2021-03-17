import React from "react";
 import { Home } from "../components/home/home"
// import { About } from "../components/about/about";
// import { Contact } from "../components/contact/contact";
// import { Experience } from "../components/experience/experience";
import { NavBar } from "../components/navbar/Navbar";
// import { Work } from "../components/work/work";
//
export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Home />
        </>
    );
};
