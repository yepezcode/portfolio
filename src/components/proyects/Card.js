import React from 'react'


export const Card = ({
    name,
    description,
    link,
    repo,
    technologies
}) => {
    
    const redirectTo = ( link ) => {
        window.open(
            link, "_blank"
        )
    }
    return (
        <div className="card__container">
            <div className="card__information">
                <div className="card__header">
                    <i className="far fa-folder proyect__folder"/>
                    <div className="card__header-links">
                       { repo && <i onClick={ () => redirectTo(repo)  } style={{ cursor: "pointer"}} className="fab fa-github proyect__git" /> }
                       { link && <i onClick={ () => redirectTo(link)  } style={{ cursor: "pointer"}} className="fas fa-external-link-alt proyect__link" /> }
                    </div>
                </div>
                <h1 className="card__name-proyect">{ name }</h1>
                <p className="card__text-proyect">
                   { description }
                </p>
                <ul className="card__footer">
                    {
                        technologies.map((technologie) => (  
                            <li key={ technologie} className="card_footer-techonologie">{technologie}</li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}
