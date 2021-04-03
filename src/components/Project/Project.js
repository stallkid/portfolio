import React from 'react';

import { Card } from 'react-bootstrap';
import imagePlaceholder from '../../assets/images/image-placeholder.png'
import Truncate from 'react-truncate';
import './Project.scss';

const Project = props => (
    <div className="project-container">
        <Card className="project-card">
            <div className={props.project.inProgress ? 'in-progress' : ''}>
                {
                    props.project.inProgress ? <span>In Progress</span> :
                    <span></span>
                }
                {
                    props.project.img ? <Card.Img variant="top" src={props.project.img} /> :
                    <Card.Img className="image-container" variant="top" src={imagePlaceholder} />
                }
            </div>
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