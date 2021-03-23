import React from 'react'
import { Card } from './Card'

export const OtherProyects = () => {
    return (
        <div className="proyects__container">
            <h1 className="proyects__title">Other Proyects</h1>
           <div className="proyects_cards"> 
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
