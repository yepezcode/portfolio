import React from 'react'
import { Card } from './Card'

export const OtherProyects = () => {
    return (
        <div className="proyects__container">
            <h1 className="proyects__title">Other Projects</h1>
           <div className="proyects_cards"> 
                <Card 
                    name="Porfolio"
                    description="This is my portfolio, created to show you my projects."
                    link="http://yepezcode.dev"
                    repo="https://github.com/yepezcode/portfolio"
                    technologies={["React","Sass"]}
                />
               
                <Card 
                    name="GiftExpert"
                    description="A page where you can search your favorite gifs. For this project I used Giphy api."
                    link="https://yepezcode.github.io/react-gifexpertapp/"
                    repo="https://github.com/yepezcode/react-gifexpertapp"
                    technologies={["React",  "Animate.js" , "Jest"]}
                />
                <Card 
                    name="HeroesApp"
                    description="A page where you can search for a super hero and learn about him."
                    link="https://heroes-app-two.vercel.app/marvel"
                    repo="https://github.com/yepezcode/HeroesApp"
                    technologies={["React",  "bootstrap", "Jest"]}
                />
                <Card 
                    name="Todo list"
                    description="A simple to-do list page. You can use it to save your tasks!"
                    link="https://yepezcode.github.io/Hooks-App/"
                    repo="https://github.com/yepezcode/Hooks-App"
                    technologies={["React",  "bootstrap", "Jest",]}
                />
                <Card 
                    name="Kenshin ERP"
                    description="I developed the backend of a web application as a school project during my career. "
                    repo="https://gitlab.com/yepezaurio/mortalgroup/-/tree/BD"
                    technologies={["Angular",  "Express", "Typescript"]}
                />
                <Card 
                    name="Chess clock "
                    description="This is another school project. Where the objective is to simulate a real chess clock."
                    repo="https://github.com/Yepezaurio/TemporizadorAjedrez"
                    technologies={["C#", "Forms",]}
                />
                
            </div>
        </div>
    )
}
