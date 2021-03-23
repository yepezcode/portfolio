import React from 'react';
import Capture1 from '../../static/Captura.png';
import Capture2 from '../../static/capture2.png';
import Capture3 from '../../static/Captura3.png';
import Capture4 from '../../static/Modest.png';
import Capture5 from '../../static/MernCalendar.png'
import { CardWork } from './CardWork';
export const Work = () => {
    return (
        <div className="work__container">
            <h1 className="title__with-line"><span className="work__title">Proyects</span></h1>
            <div className="work__content">
                <div className="work__card">
                    <div className="work__images">
                        <img src={Capture1} />
                        <img src={Capture2} />
                        <img src={Capture3} />
                    </div>
                    <div className="work__information">
                        <p className="work__feature">Feature Project</p>
                        <p className="work__work-title">Siina</p>
                        <p className="work__work-information">
                            Application for monitoring IoT devices using MQTT protocols, view state on real time and control and test devices using RTC </p>
                        <ul className="work__technologies">
                            <li>Expo</li>
                            <li>Mqtt</li>
                            <li>Python</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
                <div className="work__card">
                    <div className="work__images">
                        <img src={Capture4} />
                    </div>
                    <div className="work__information">
                        <p className="work__feature">Feature Project</p>
                        <p className="work__work-title">Modest</p>
                        <div className="work__work-information">
                            <p >
                                IA using bayesians networks for evaluate the competences of the students and create a view of skills. I win a  <a>Publication</a> in CIIE2019 and oportunitie of the present it in the Tecnologico de Monterrey campus Monterrey
                            </p>
                        </div>

                        <ul className="work__technologies">
                            <li>Python</li>
                            <li>PySmile</li>
                            <li>Arbor.js</li>
                            <li>Django</li>

                        </ul>
                    </div>

                </div>
                <div className="work__card">
                    <div className="work__images">
                        <img style={{   marginTop: "100px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        height: "100"
                     }} src={Capture5} />
                    </div>
                    <div className="work__information">
                        <p className="work__feature">Feature Project</p>
                        <p className="work__work-title">MERN Calendar</p>
                        <div className="work__work-information">
                            <p >
                            Calendar for create reminders, create account and view all recordatories for others users.
                            </p>
                        </div>
                        <ul className="work__technologies">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Redux </li>
                            <li>NodeJS</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
