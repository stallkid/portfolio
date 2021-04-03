import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap';
import './Header.scss';

class Header extends Component {

    state = {
        tabs: [
            { id: 1, name: "Projects", path: "/" },
            { id: 2, name: "Certificates", path: "/certificates" },
            { id: 3, name: "About Me", path: "/about" }
        ]
    };

    render() {

        let tabs = null;
        tabs = (
            this.state.tabs.map( tab => {
                return <NavLink exact={true} key={tab.id} className="nav-link" to={tab.path}>{tab.name}</NavLink>
            })
        );

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
                <Navbar.Brand href="#home">Portfolios</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {tabs}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;