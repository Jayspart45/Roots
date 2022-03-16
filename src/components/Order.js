import React from 'react';
import Layout from './Layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Search from './Search';

export default function Order() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Search />}></Route>
                    <Route path="/Layout" element={<Layout />}></Route>
                </Routes>
            </Router>
        </div>
    );
}
