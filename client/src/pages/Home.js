// src/pages/Home.js
import React from 'react';
import Nav from '../components/Nav';
import Feed from '../components/Feed';
import Bulletin from '../components/Bulletin';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';

import '../styles/Home.css'

const Home = () => {
    return (
        <div id="page">
            <Nav />
            <main id="main">
                <Bulletin />
                <Feed />
            </main>
            <Toolbar />
            <Footer />
        </div>
    );
};

export default Home;
