import React from "react";
import Photo from '../../static/Photo_perfil.jpg'
export const About = () => {
    return (
        <div className="about__container">
            <h1 className="title__with-line"><span className="about__title">About Me</span></h1>
            <div className="about__content">
                <div className="about__information">
                    <p>
                        I’m Currently I’m a <a className="p__medium">Jr. Software Developer</a> just graduated from the Instituto Tecnologico de Estudios Superiores de Zamora, (Technological Institute of Higher Studies of Zamora),  I’m 22 years old and I’m willing to relocate.<br /><br />
                        I’m a Linux user also i’ve been using neovim like main code editor. <br />
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <div className="about__technologies">
                        <ul>
                            <li>JavaScript (ES6)</li>
                            <li>React & React Native</li>
                            <li>Node JS</li>
                        </ul>
                        <ul>
                            <li>Redux</li>
                            <li>Python</li>
                            <li>MySQL & MongoDB</li>
                        </ul>
                    </div>
                   
                </div>
                <img className="about__image" src={ Photo } alt="Photo mine" />
            </div>
        </div>
    );
};
