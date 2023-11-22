import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from '../pages/homepage';

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    )
}

export default MainRouter;