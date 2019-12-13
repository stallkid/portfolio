import React from 'react';

import Wrap from '../Wrap/Wrap';
import Header from '../../components/Header/Header';
import classes from './Layout.css';

const Layout = props => {
    return (
        <Wrap>
            <header className="App-header">
                <Header></Header>
            </header>
            <main className={classes.Content}>{props.children}</main>
        </Wrap>
    );
}

export default Layout;