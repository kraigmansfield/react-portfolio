import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: "Steam Sales Tracker",
            description: "This is an application used by gamers where they can find steam games on sale in an easy to use format.",
            image: 'steam-sales-tracker.png',
            technologies: [
                'HTML/CSS', 
                'JavaScript', 
                'jQuery',
            ],
            github: 'https://github.com/kairo97/Steam-sale-tracker',
            deployed: 'https://kairo97.github.io/Steam-sale-tracker/',
        },
        {
            name: "COR3",
            description: "This is an application to easily track users maximum repetitions. This calculates a one-rep-max based on inputted weight and reps",
            image: 'project_zoom_background.jpg',
            technologies: [
                'HTML/CSS', 
                'JavaScript', 
                'Handlebars',
                'Express.js',
                'Node.js',
                'mySQL',
                'Sequelize'
            ],
            github: 'https://github.com/kairo97/Steam-sale-tracker',
            deployed: 'https://kairo97.github.io/Steam-sale-tracker/',
        },
        {
            name: "Steam Sales Tracker",
            description: "This is an application used by gamers where they can find steam games on sale in an easy to use format.",
            image: 'steam-sales-tracker.png',
            technologies: [
                'HTML/CSS', 
                'JavaScript', 
                'jQuery'
            ],
            github: 'https://github.com/Raflores10/workout-tracker',
            deployed: 'https://cor3app.herokuapp.com/'

        },
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;