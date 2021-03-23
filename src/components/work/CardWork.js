import React from 'react'

// Este es un componente para no hacer demasiado codigo, sin embargo, al querer personalizar texto del codigo
// no me deja lo detecta como texto. 

export const CardWork = ({ images, nameProject, information, technologies, imagenSize = 300 }) => {
    console.log(information);
    return (
        <div className="work__card">
            <div className="work__images" >
               {
                   images.map( imagen => (
                       <img style={{ height: imagenSize }} src={imagen} />
                   ))
               }
            </div>
            <div className="work__information">
                <p className="work__feature">Feature Project</p>
                <p className="work__work-title">{ nameProject }</p>
                <p className="work__work-information">
                   { information } 
                </p>
                <ul className="work__technologies">
                    {
                        technologies.map( (techonologie) => (
                            <li>{ techonologie }</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
