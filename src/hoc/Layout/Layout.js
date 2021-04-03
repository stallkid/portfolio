import React from 'react';

import Wrap from '../Wrap/Wrap';
import Header from '../../components/Header/Header';
import  './Layout.scss';

const Layout = props => {
    return (
        <Wrap>
            <header className="App-header">
                <Header></Header>
            </header>
            <main className='Content'>{props.children}</main>
        </Wrap>
    );
}

export default Layout;