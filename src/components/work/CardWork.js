import React from 'react'

// Este es un componente para no hacer demasiado codigo, sin embargo, al querer personalizar texto del codigo
// no me deja lo detecta como texto. 

export const CardWork = ({ images, nameProject, technologies, repo, link, children }) => {

    const redirectTo = ( link ) => {
        window.open(
            link, "_blank"
        )
    }

    return (
        <div className="work__card-container">
                <div className="work__text">
                    <div className="grid_title">
                        <div className="work_feature">
                            <p className="work__feature">Feature Project</p>
                        </div>
                        <div className="work_name-title">
                             <p onClick={ () => redirectTo(link) } className="work__work-title">{ nameProject }</p>
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
                             { link && <i onClick={ () => redirectTo(link)  } style={{ cursor: "pointer"}} className="fas fa-external-link-alt proyect__link" /> }
                                { repo && <i onClick={ () => redirectTo(repo)  } style={{ cursor: "pointer"}} className="fab fa-github proyect__git" /> }
                                
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
