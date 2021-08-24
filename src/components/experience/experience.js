import React, { useState } from "react";
import WaveTop from "../../static/waves/wave.svg";
import WaveBot from "../../static/waves/waveBot.svg";
import { Modest } from "./modest";
import { Smarti } from "./smarti";
import { Secundus } from "./secundus";

export const Experience = () => {
  const [infoJob, setInfoJob] = useState("secundus");

  const handleJob = (e) => {
    let job = e.target.id;
    setInfoJob(job);
  };
  const JobInformation = () => {
    if (infoJob === "smarti") {
      return <Smarti />;
    }
    if (infoJob === "modest") {
      return <Modest />;
    }
    if (infoJob === "secundus") {
      return <Secundus />;
    }
  };

  return (
    <>
      <img
        loading="lazy"
        alt="wave from getwaves.io"
        style={{ display: "flex" }}
        src={WaveTop}
      />
      <div className="experience__container">
        <h1 className="experience__title">
          Where I've Worked <div className="experience__line"></div>
        </h1>
        <div className="experience__content">
          <div className="experience__jobs">
            <ul>
              <li
                className={infoJob === "secundus" ? "active" : "no-active"}
                onClick={handleJob}
                id="secundus"
              >
                Secundus
              </li>
              <li
                className={infoJob === "smarti" ? "active" : "no-active"}
                onClick={handleJob}
                id="smarti"
              >
                Smarti
              </li>
              <li
                className={infoJob === "modest" ? "active" : "no-active"}
                onClick={handleJob}
                id="modest"
              >
                Modest
              </li>
            </ul>
          </div>
          {JobInformation()}
        </div>
      </div>
      <img loading="lazy" alt="wave from getwaves.io" src={WaveBot} />
    </>
  );
};
