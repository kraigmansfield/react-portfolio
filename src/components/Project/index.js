import React, {useState} from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
    const currentProject = useState(props)[0].projects;
    const name= currentProject.name
    const description= currentProject.description
    const image= currentProject.image
    const technologies= currentProject.technologies
    const deployedLink= currentProject.deployedLink
    const githubLink= currentProject.githubLink


function getTechs(techArray) {
    let techList = "";

    for (var i = 0; i < techArray.length; i++) {
        if (i === techArray.length - 1) {
            techList += techArray[i];
        } else {
            techList += techArray[i] + ", ";
        }
    }

    return techList;
}

return (
    <Card style={{width: "25rem"}}>
        <Card.Img
            variant="top"
            scr={require(`../../assets/images/${image}`)}
            className="card-image"
        />
        <div class="center">
            <Card.Body>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                <Card.Subtitle className="card-subtitle">Technologies Used</Card.Subtitle>
                <Card.Text className="card-technologies">{getTechs(technologies)}</Card.Text>
                <Card.Link href={deployedLink} target="_blank" className="card-link">
                    {name} App
                </Card.Link>
                <br></br>
                <Card.Link href={githubLink} target="_blank" className="card-link">
                    {name} Github
                </Card.Link>

            </Card.Body>
        </div>
    </Card>
)
}

export default Project