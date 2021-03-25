import React from 'react';
import Flecha from '../../static/list-styles/play-button.svg'

export const Modest = () => {
    return (
        <div className="experience__information">
            <p className="experience__information-title">
                Summer research stary through the Dolphin program <a target="_blank" href="https://drive.google.com/file/d/1uERXBqgTKnxeN3yKywCiiwSPK7a2Gmqv/view?usp=sharing">@Modest</a>
            </p>
            <p className="experience__information-date">Jun - Jul 2019 </p>

            <p className="experience__text">
                Although this was when I was a student, I consider it as a work experience because I worked 1 month during the week and that resulted in a <a>Publication</a> at CIIE2019 and a conference that I gave at the <p>University of Monterrey, Monterrey campus</p>.
            </p>

            <ul>
                <li>
                <img className="list-arrow" src={Flecha} />
                I worked with python lenguages using Django and libreries as pysmile
            </li>
                <li>
                <img className="list-arrow" src={Flecha} />
                Created students models that assesses student skills
            </li>
                <li>
                <img className="list-arrow" src={Flecha} />
                Show the student skill tree using the arbor.js library
            </li>
            </ul>
        </div>
    )
}
