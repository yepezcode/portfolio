import React from 'react'

// Este es un componente para no hacer demasiado codigo, sin embargo, al querer personalizar texto del codigo
// no me deja lo detecta como texto. 

export const CardWork = ({ images, nameProject, technologies, children }) => {
    return (
        <div className="work__card-container">
                <div className="work__text">
                    <div className="grid_title">
                        <div className="work_feature">
                            <p className="work__feature">Feature Project</p>
                        </div>
                        <div className="work_name-title">
                             <p className="work__work-title">{ nameProject }</p>
                        </div>
                    </div>
                    <div className="grid_information">
                        <div className="work_information">
                        <p >
                            { children }
                        </p>
                        </div>
                        <div className="work_technologies">
                            <ul className="work__technologies">
                                {
                                    technologies.map( tecnologie => (
                                        <li key={tecnologie}>{tecnologie}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="work__imagen">
                    <img alt="about my job" src={images} />
                </div>

            </div>
    )
}
