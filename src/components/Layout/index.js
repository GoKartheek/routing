import React from 'react';
import './style.css';
import Header from '../Header';

const Layout = ({children}) => {
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="children">
                {children}
            </div>
        </div>
    )
}

export default Layout;