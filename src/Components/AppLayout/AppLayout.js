import React from 'react';
import HeaderMenu from '../Header/HeaderMenu/HeaderMenu';
import Footer from '../Footer/Footer';

const AppLayout = ({children}) => {
    return (
        <>
            <HeaderMenu></HeaderMenu>
            {children}
            <Footer></Footer>
        </>
    );
};

export default AppLayout;