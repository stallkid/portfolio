import React, { Component } from 'react';

import './Certificates.css';
import { Container, Row, Col } from 'react-bootstrap';
import Certificate from '../../components/Certificate/Certificate';

class Certificates extends Component {

    state = {
        certificates: [
            { id: 1, img: "images/certificates/Angular - The Complete Guide(2020 Edition).jpg", title: "Angular - The Complete Guide(2020 Edition)", link: "https://ude.my/UC-a2cc1b3d-4bdc-4c9c-8b3f-9b287cbdd679", platform: "udemy" },
            { id: 2, img: "images/certificates/Laravel 5.5 com Vue JS.jpg", title: "Laravel 5.5 com Vue JS", link: "https://ude.my/UC-3fa0535f-2b1d-4b09-bbc8-5f405df325e6", platform: "udemy" },
            { id: 3, img: "images/certificates/React - The Complete Guide (incl Hooks, React Router, Redux).jpg", title: "React - The Complete Guide (incl Hooks, React Router, Redux)", link: "https://ude.my/UC-e8e007da-8483-4d7e-9095-a59796ecc0ac", platform: "udemy" },
            { id: 4, img: "images/certificates/springboot-ionic-certificado.jpg", title: "Spring Boot, Hibernate, REST, Ionic, JWT, S3, MySQL, MongoDB", link: "https://ude.my/UC-c597f94b-29ea-405a-a7a7-838e7acd0caf", platform: "udemy" },
            { id: 5, img: "images/certificates/The Complete JavaScript Course - Beginner to Professional.jpg", title: "The Complete JavaScript Course - Beginner to Professional", link: "https://ude.my/UC-ea379614-4d9e-4a6b-8001-90ed1af0e7e5", platform: "udemy" }
        ]
    };

    render() {
        let certificates = null;
        certificates = (
            this.state.certificates.map( certificate => {
                return (
                    <Col key={certificate.id} md="auto" className="certificate-content">
                        <Certificate key={certificate.id} certificate={certificate}></Certificate>
                    </Col>
                );
            })
        );

        return (
            <Container className="main-content">
                <Row className="justify-content-sm-center">
                    {certificates}
                </Row>
            </Container>
        );
    }
}

export default Certificates;