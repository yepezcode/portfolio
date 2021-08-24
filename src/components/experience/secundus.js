import React from "react";
import Flecha from "../../static/list-styles/play-button.svg";
export const Secundus = () => {
  return (
    <div className="experience__information">
      <p className="experience__information-title">
        Full Stack Web Developer{" "}
        <a target="_blank" rel="noreferrer" href="https://secundus.com.mx">
          @Secundus
        </a>
      </p>
      <p className="experience__information-date">April 2021 - Current </p>
      <ul>
        <li>
          <img loading="lazy" alt="arrow" className="list-arrow" src={Flecha} />
          Developing reusable components in React JS. Use Rematch library for
          Redux.
        </li>
        <li>
          <img loading="lazy" alt="arrow" className="list-arrow" src={Flecha} />
          Creating new routes in REST API from Express. Also made new models of
          Sequelize for MYSQL.
        </li>
        <li>
          <img loading="lazy" alt="arrow" className="list-arrow" src={Flecha} />
          Using AWS Tools like Cognito, Dynamo DB, Code Commit, S3, RDS, lambda,
          and CodeStar
        </li>
      </ul>
    </div>
  );
};
