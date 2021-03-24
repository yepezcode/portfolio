import React from 'react';
import Capture1 from '../../static/Captura.png';
import Capture2 from '../../static/capture2.png';
import Capture3 from '../../static/Captura3.png';
import Capture4 from '../../static/Modest.png';
import Capture5 from '../../static/MernCalendar.png'
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
            <div className="work__card-container">
                <div className="work__text">
                    <div className="grid_title">
                        <div className="work_feature">
                            <p className="work__feature">Feature Project</p>
                        </div>
                        <div className="work_name-title">
                             <p className="work__work-title">Modest</p>
                        </div>
                    </div>
                    <div className="grid_information">
                        <div className="work_information">
                        <p >
                            IA using bayesians networks for evaluate the competences of the students and create a view of skills. I win a  <a>Publication</a> in CIIE2019 and oportunitie of the present it in the Tecnologico de Monterrey campus Monterrey
                        </p>
                        </div>
                        <div className="work_technologies">
                            <ul className="work__technologies">
                                <li>Python</li>
                                <li>PySmile</li>
                                <li>Arbor.js</li>
                                <li>Django</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="work__imagen">
                    <img src={Capture4} />
                </div>

            </div>
            
        </div>
        
    )
}
