import React, { useState } from 'react';
import WaveTop from '../../static/waves/wave.svg'
import WaveBot from '../../static/waves/waveBot.svg';


export const Experience = () => {

    const Jobs = ['smarti', 'modest']
    const [infoJob, setInfoJob] = useState(Jobs[0]);
    
    console.log(infoJob);
    return (
        <>
            <img style={{ display: 'flex' }} src={WaveTop} />
            <div className="experience__container">
            <h1 className="experience__title">Where I've Worked <div className="experience__line"></div></h1>
                <div className="experience__content">
                    <div className="experience__jobs">
                      <ul>
                          <li id='smarti'>Smarti</li>
                          <li id='modest'>Modest</li>
                      </ul>
                    </div>
                    <div className="experience__information">
                        <p className="experience__information-title">Remote mobile development <a>@Smarti</a></p>
                        <p className="experience__information-date">Jun - Dec 2020 </p>
                        <ul>
                            <li>
                            Design interfaces with good user experience in Figma  
                            </li>
                            <li>
                            Create communications in IoT devices with the MQTT protocol in Python and Javascript
                            </li>
                            <li>
                            Development the application in react native expo
                            </li>
                        </ul>
                    </div>
                </div>               
            </div>
            <img src={WaveBot} />

        </>
    )
}
