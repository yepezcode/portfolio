import React from 'react'
import { Card } from './Card'

export const OtherProyects = () => {
    return (
        <div className="proyects__container">
            <h1 className="proyects__title">Other Proyects</h1>
           <div className="proyects_cards"> 
                <Card 
                    name="Porfolio"
                    description="This is my porfolio created for show my projects and now you are here"
                    link="www.yepezcode.dev"
                    repo="https://github.com/yepezcode/portfolio"
                    technologies={["React","Sass"]}
                />
               
                <Card 
                    name="GiftExpert"
                    description="A page you can search a word and show you gifts about it. I used Giphy api"
                    link="https://yepezcode.github.io/react-gifexpertapp/"
                    repo="https://github.com/yepezcode/react-gifexpertapp"
                    technologies={["React",  "Animate.js, Jezt"]}
                />
                <Card 
                    name="HeroesApp"
                    description="A page with Heroes where you search heroes and know about that"
                    link="https://heroes-app-two.vercel.app/marvel"
                    repo="https://github.com/yepezcode/HeroesApp"
                    technologies={["React",  "bootstrap", "Jezt"]}
                />
                <Card 
                    name="Todo list"
                    description="A simple page for to-do list, you can use it for save you task this is saved in your browser"
                    link="https://yepezcode.github.io/Hooks-App/"
                    repo="https://github.com/yepezcode/Hooks-App"
                    technologies={["React",  "bootstrap", "Jezt"]}
                />
                <Card 
                    name="Kenshin ERP"
                    description="This were a scholar work with my parners in this case i created backend part "
                    repo="https://gitlab.com/yepezaurio/mortalgroup/-/tree/BD"
                    technologies={["Angular",  "Express", "Typescript"]}
                />
                <Card 
                    name="Chess clock "
                    description="A chess clock you can configurate a time. Other scholar work  "
                    repo="https://github.com/Yepezaurio/TemporizadorAjedrez"
                    technologies={["C#", "Forms",]}
                />
                
            </div>
        </div>
    )
}
