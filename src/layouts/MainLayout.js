import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/Header';

const MainLayout = ({ children }) => {
    return (  
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    )  
};

export default MainLayout;