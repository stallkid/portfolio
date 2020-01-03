import React, { Component } from 'react';

import './Content.css';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../../components/Project/Project';

class Content extends Component {

    state = {
        projects: [
            { id: 1, img: "images/node-chat.PNG", title: "Chat - Node.js", description: "Chat done in Node.js With Websockets", link: "http://nca-751.mybluemix.net", source: "https://github.com/stallkid/node-chat" },
            { id: 2, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 3, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 4, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 5, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 6, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 7, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 8, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            { id: 9, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
        ]
    };

    render() {
        let projects = null;
        projects = (
            this.state.projects.map( project => {
                return (
                    <Col key={project.id} md="auto" className="project-content">
                        <Project key={project.id} project={project}></Project>
                    </Col>
                );
            })
        );

        return (
            <Container className="main-content">
                <Row className="justify-content-sm-center">
                    {projects}
                </Row>
            </Container>
        );
    }
}

export default Content;