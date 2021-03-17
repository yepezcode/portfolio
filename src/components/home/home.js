import React from "react";

export const Home = () => {
    return (
        <div className="home__container">
            <div className="home__text-container">
                <p className="home__text-initial">Hello, my name is</p>
                <p className="home__text-name">Mauricio Yepez</p>
                <p className="home__text-under-name">FullStack developer</p>
                <p className="home__information">
                    I'm Engeineering in Information and Comunication
                    Technologies.<br/> I like the challenges and learning about
                    technology{" "}
                </p>
                <button className="btn-online"> Get in Touch</button>
            </div>
        </div>
    );
};
