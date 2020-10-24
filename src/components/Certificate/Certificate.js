import React from 'react';

import { Card } from 'react-bootstrap';
import imagePlaceholder from '../../assets/images/image-placeholder.png'
import Truncate from 'react-truncate';
import './Certificate.css';

const Certificate = props => (
    <div className="certificate-container">
        <Card className="certificate-card">
        { 
            props.certificate.img ? <Card.Img variant="top" src={props.certificate.img} /> :
            <Card.Img className="image-container" variant="top" src={imagePlaceholder} />
        }
        <Card.Body>
        <Card.Title>{props.certificate.title}</Card.Title>
            <div>Course: <a href={props.certificate.link} target="blank">
                <Truncate lines={1} ellipsis={<span>...</span>}>
                    {props.certificate.link}
                </Truncate>
            </a></div>
        </Card.Body>
        </Card>
    </div>
);

export default Certificate;