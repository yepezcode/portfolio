import React from 'react'


export const Card = () => {
    return (
        <div className="card__container">
            <div className="card__information">
                <div className="card__header">
                    <i className="far fa-folder proyect__folder"/>
                    <div className="card__header-links">
                        <i class="fab fa-github proyect__git" />
                        <i class="fas fa-external-link-alt proyect__link"  />
                    </div>
                </div>
                <h1 className="card__name-proyect">Journal App</h1>
                <p className="card__text-proyect">
                    A simple page where you can write notes about your day
                </p>
                <ul className="card__footer">
                    <li className="card_footer-techonologie">React</li>
                    <li className="card_footer-techonologie">Redux</li>
                    <li className="card_footer-techonologie">Firebase</li>
                </ul>
            </div>
            
        </div>
    )
}
