import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="">
            <Header />
            <div className="">
                <div>
                    {children}
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
