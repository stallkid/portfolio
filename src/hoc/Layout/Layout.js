import React from 'react';

import Wrap from '../Wrap/Wrap';
import Header from '../../hoc/Layout/Header/Header';
import Footer from '../../hoc/Layout/Footer/Footer';
import  './Layout.scss';

const Layout = props => {
    return (
        <Wrap>
            <header className="app-header">
                <Header></Header>
            </header>
            <main className='Content'>{props.children}</main>
            <Footer></Footer>
        </Wrap>
    );
}

export default Layout;