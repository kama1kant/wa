import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './CominSoon';
import LandingPage from './LandingPage';


function Main() {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<ComingSoon />} /> */}
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
    )
}

export default Main;