import React from 'react';
import Capture1 from '../../static/Siina.png';
import Capture2 from '../../static/Modest.png';
import Capture3 from '../../static/MernCalendar.png'
import { CardWork } from './CardWork';
export const Work = () => {
    return (
        // <div className="work__container">
        //     <h1 className="title__with-line"><span className="work__title">Proyects</span></h1>
        //     <div className="work__content">
        //         <div className="work__card">
        //             <div className="work__images">
        //                 <img src={Capture4} />
        //             </div>
        //             <div className="work__information">
        //                 <p className="work__feature">Feature Project</p>
        //                 <p className="work__work-title">Modest</p>
        //                 <div className="work__work-information">
        //                     <p >
        //                         IA using bayesians networks for evaluate the competences of the students and create a view of skills. I win a  <a>Publication</a> in CIIE2019 and oportunitie of the present it in the Tecnologico de Monterrey campus Monterrey
        //                     </p>
        //                 </div>

        //                 <ul className="work__technologies">
        //                     <li>Python</li>
        //                     <li>PySmile</li>
        //                     <li>Arbor.js</li>
        //                     <li>Django</li>

        //                 </ul>
        //             </div>

        //         </div>
               
        //     </div>
        // </div>
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
            >
                 IA using bayesians networks for evaluate the competences of the students and create a view of skills. I win a  <a target="_blank" href="https://drive.google.com/file/d/1uERXBqgTKnxeN3yKywCiiwSPK7a2Gmqv/view?usp=sharing">Publication</a> in CIIE2019 and oportunitie of the present it in the Tecnologico de Monterrey campus Monterrey
            </CardWork>

            <CardWork
                 images={ Capture3 }
                 nameProject="MERN Calendar"
                 technologies={["MongoDB","Express","React","NodeJS", "Redux"]}
            >
                Calendar for create reminders, create account and view all recordatories for others users

            </CardWork>

        
            
        </div>
        
    )
}
