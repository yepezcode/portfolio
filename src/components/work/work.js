import React from 'react';
import Capture1 from '../../static/Siina.png';
import Capture2 from '../../static/Modest.png';
import Capture3 from '../../static/MernCalendar.png'
import { CardWork } from './CardWork';
export const Work = () => {
    return (
        <div className="work__container">
            <h1 className="title__with-line"><span className="work__title">Proyects</span></h1>
            
            <CardWork
                images={ Capture1 }
                nameProject="Siina"
                technologies={["Expo","MQTT","Python","Express"]}
            >
                Application for monitoring IoT devices using MQTT protocols, view state on real time and control and test devices using RTC 
            </CardWork>
            <CardWork
                 images={ Capture2 }
                 nameProject="Modest"
                 technologies={["Python","PySmile","Arbor.js","Django"]}
                 link="https://drive.google.com/file/d/1uERXBqgTKnxeN3yKywCiiwSPK7a2Gmqv/view"
            >
                 IA development using bayesian networks to evaluate students' competences and creating a user interface to visualize the information collected. This project was<a target="_blank"  rel="noreferrer" href="https://drive.google.com/file/d/1uERXBqgTKnxeN3yKywCiiwSPK7a2Gmqv/view">published</a> at CIIE2019 and I had the opportunity to present it in the Tecnologico de Monterrey.
            </CardWork>

            <CardWork
                 images={ Capture3 }
                 nameProject="MERN Calendar"
                 technologies={["MongoDB","Express","React","NodeJS", "Redux"]}
                 link="https://mern-calendar-mau.herokuapp.com/"
            >
                Calendar capable of creating reminders and visualize them. This application has a full sign up and sign in system.

            </CardWork>

        
            
        </div>
        
    )
}
