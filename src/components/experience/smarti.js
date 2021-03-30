import React from 'react'
import Flecha from '../../static/list-styles/play-button.svg'
export const Smarti = () => {
    return (
        <div className="experience__information">
            <p className="experience__information-title">Remote mobile development <a target="_blank"  rel="noreferrer" href="https://www.smarti.mx/">@Smarti</a></p>
            <p className="experience__information-date">Jun - Dec 2020 </p>
            <ul>
                <li>
                    <img alt="arrow" className="list-arrow" src={Flecha} />
                    User interface design using Figma
                </li>
                <li>
                    <img alt="arrow" className="list-arrow" src={Flecha} />
                    Creating communications in IoT devices with the MQTT protocol in Python and Javascript
                </li>
                <li>
                    <img alt="arrow" className="list-arrow" src={Flecha} />
                    Developing the application with react native expo
                </li>
            </ul>
        </div>
    )
}
