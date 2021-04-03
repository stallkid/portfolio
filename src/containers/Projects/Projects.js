import React, { Component } from 'react';

import './Projects.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../../components/Project/Project';

class Projects extends Component {

    state = {
        projects: [
            { id: 1, img: "images/node-chat.PNG", title: "Chat - Node.js", description: "Chat done in Node.js With Websockets", link: "http://nca-751.mybluemix.net", source: "https://github.com/stallkid/node-chat", inProgress: false },
            { id: 2, img: "images/reactjs-chess.png", title: "React.js Chess", description: "Chess Board done in React.js", link: "https://reactjs-chess.netlify.app/", source: "https://github.com/stallkid/reactjs-chess", inProgress: false },
            // { id: 3, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            // { id: 4, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            // { id: 5, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            // { id: 6, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            // { id: 7, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            // { id: 8, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
            // { id: 9, img: "", title: "To Do List - Angular App", description: "To Do List developed in Angular", link: "http://symbolic_link.com", source: "http://github.com" },
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

export default Projects;