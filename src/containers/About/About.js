import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './About.scss';
import Personal from '../../components/Personal/Personal';

class About extends Component {

    state = {
        componentTitles: ["Personal Data", "Graduation", "Work Experience", "Work Experience", "Work Experience", "Skills"],
        personData: [
            [
                { id: 1, title: "Name", data: "Renan Luis Bianchini"},
                { id: 2, title: "Nationality", data: "brazilian"},
                { id: 3, title: "Email", data: "renan.asthusius@hotmail.com"},
                { id: 4, title: "Date of Birth", data: "06th January 1997"},
                { id: 5, title: "Gender", data: "Male"},
                { id: 6, title: "Address", data: "2351, 21th Avenue, Consolação, SP 13503-440 Brazil"}
            ],[
                { id: 7, title: "2017 - Today", data: "Computer Science (UNIP) – Limeira – SP"},
                { id: 8, title: "2012 - 2014", data: "High School"}
            ], [
                { id: 9, title: "Place", data: "2018/Actual – IBM (Hortolândia)"},
                { id: 10, title: "Position", data: "Frontend Developer"},
                { id: 11, title: "Activities", data: "(Sprint Training Tool Project) - working mainly on scenarios execution steps and adjusting the layout of the entire system in Angular 7"},
            ], [
                { id: 12, title: "Place", data: "2017/2018 – W2Z Soluções em TI"},
                { id: 13, title: "Position", data: "Fullstack Developer"},
                { id: 14, title: "Activities", data: "Development of new solutions in Angular2+ and PHP also Support to PHP legacy code"},
            ], [
                { id: 15, title: "Place", data: "2016/2017 – Owens Corning Fiberglass"},
                { id: 16, title: "Position", data: "TPM Trainee"},
                { id: 17, title: "Activities", data: "TPM production activities and VBA programming for Excel"},
            ], [
                { id: 18, title: "Advanced Knowledge", data: "Git, PHP 5.4 – 7.1, Javascript (Jquery library), AJAX, JSON files, HTML5, CSS, MySQL, Object Oriented Programming, PHP Laravel framework and Angular 2+"},
                { id: 19, title: "Basic Knowledge", data: "React.js, Vue.js, JAVA, Spring Boot, C, Python, PostgreSQL, Sqlite and Firebird."},
            ]
        ]
    }

    render() {

        let aboutData = null;
        aboutData = (
            this.state.personData.map( (personData, index) => {
                return <Personal key={index} title={this.state.componentTitles[index]} data={personData} />
            })
        )

        return (
            <Container className="about-content">
                <Row className="justify-content-sm-center">
                    <Col md="auto">
                        <div className="cv-image">
                            <Image src="images/person2.jfif" thumbnail />
                        </div>
                    </Col>
                </Row>
                {aboutData}
            </Container>
        );
    }
}

export default About;