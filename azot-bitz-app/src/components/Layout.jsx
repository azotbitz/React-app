import React from 'react';
import {Outlet} from 'react-router-dom';
import ButtonAppBar from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <ButtonAppBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;