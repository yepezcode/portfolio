import React from "react";
import Photo from "../../static/Photo_perfil.jpg";
export const About = () => {
  return (
    <div className="about__container">
      <h1 className="title__with-line">
        <span className="about__title">About Me</span>
      </h1>
      <div className="about__content">
        <div className="about__information">
          <p>
            I’m currently a{" "}
            <span className="p__medium">Software Developer</span> with 1 year of
            experience. I’m 23 years old and I’m willing to relocate. I'm for
            searching new challenges where I can be better.
            <br />
            <br />
            I've been using Linux for 4 years also I’ve been using neovim as my
            main code editor. <br />
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
            <ul>
              <li>S3 </li>
              <li>Dynamo DB</li>
            </ul>
          </div>
        </div>
        <img
          loading="lazy"
          alt="Im with t-shit withe"
          className="about__image"
          src={Photo}
        />
      </div>
    </div>
  );
};

