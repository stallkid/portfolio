import React from 'react';

import { Card } from 'react-bootstrap';
import imagePlaceholder from '../../assets/images/image-placeholder.png'
import Truncate from 'react-truncate';

const Project = props => (
    <div className="project-container">
        <Card style={{ width: '18rem' }}>
        { 
            props.project.img ? <Card.Img variant="top" src={props.project.img} /> :
            <Card.Img className="image-container" variant="top" src={imagePlaceholder} />
        }
        <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
            <Card.Text>
                <Truncate lines={3} ellipsis={<span>...</span>}>
                    {props.project.description}
                </Truncate>
            </Card.Text>
            
            <div>Demo: <a href={props.project.link} target="blank">
                <Truncate lines={1} ellipsis={<span>...</span>}>
                    {props.project.link}
                </Truncate>
            </a></div>
            <div>Source: <a href={props.project.source} target="blank">
                <Truncate lines={1} ellipsis={<span>...</span>}>
                    {props.project.source}
                </Truncate>
            </a></div>
        </Card.Body>
        </Card>
    </div>
);

export default Project;