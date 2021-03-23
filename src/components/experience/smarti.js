import React from 'react'
import Flecha from '../../static/list-styles/play-button.svg'
export const Smarti = () => {
    return (
        <div className="experience__information">
            <p className="experience__information-title">Remote mobile development <a>@Smarti</a></p>
            <p className="experience__information-date">Jun - Dec 2020 </p>
            <ul>
                <li>
                    <img alt="arrow" className="list-arrow" src={Flecha} />
                    Design interfaces with good user experience in Figma
                </li>
                <li>
                    <img alt="arrow" className="list-arrow" src={Flecha} />
                    Create communications in IoT devices with the MQTT protocol in Python and Javascript
                </li>
                <li>
                    <img alt="arrow" className="list-arrow" src={Flecha} />
                    Development the application in react native expo
                </li>
            </ul>
        </div>
    )
}
