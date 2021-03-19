import React from "react";
import { Button } from "../button/Button";
import { Images } from "./images";

export const Home = () => {
    return (
        <div className="home__container">
            <div>
                    <p className="home__text-initial">Hello, my name is</p>
                    <p className="home__text-name">Mauricio Yepez</p>
                    <p className="home__text-under-name">FullStack developer</p>
                    <p className="home__information">
                        I'm Engeineering in Information and Comunication
                        Technologies.<br/> I like the challenges and learning about
                        technology{" "}
                    </p>
                    <Button 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    > 
                        Get in Touch
                    </Button>
            </div>
            <div>
                <Images />
            </div>
        </div>
    );
};
