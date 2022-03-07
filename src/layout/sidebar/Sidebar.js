import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Fragment } from 'react'



const navigation = [
    {
        name: 'Projects',
        imgSrc: "list_alt",
        Linkto: "/dashboard"
    },
    {
        name: 'Help Desk',
        imgSrc: "support_agent",
        Linkto: "/helpdesk"
    },
    {
        name: 'Sites',
        imgSrc: "domain",
        Linkto: "/sites"
    },
    {
        name: 'Team',
        imgSrc: "groups",
        Linkto: "/teamwork"
    },
    {
        name: 'Super Chat',
        imgSrc: "chat",
        Linkto: "/chats"
    },
    {
        name: 'Payments',
        imgSrc: "account_balance_wallet",
        Linkto: "/fees"
    },


]

const Sidebar = () => {
    const location = useLocation();
    const [togglemenu, setToggleMenu] = useState(true)


    const togglemenumob = () => {
        setToggleMenu(!togglemenu)
    }

    const fullSider = (props) =>{
        props.sideBarFull()
    }
    return (

        <>
            <div className="xl:hidden fixed z-75 bottom-2 left-2 bg-scogoprimary h-10 w-10 leading-10 rounded-full " onClick={togglemenumob}>
            {/* <div className="lg:hidden fixed z-40 bottom-2 left-2 bg-scogoprimary h-10 w-10 leading-10 rounded-full " onClick={() => setToggleMenu(!togglemenu)}> */}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 ml-2 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>

            {togglemenu ?
                <div className="w-20 2xl:w-24  bg-white text-center z-50 fixed mt-16 border h-screen border-gray-200 ">
                    {navigation.map(item => {
                        return (
                            <Link to={item.Linkto} className={location.pathname === item.Linkto ? 'block 2xl:py-4 py-2 bg-blue-100 border-l-4 border-scogoprimary' : 'block 2xl:py-4 py-2 hover:bg-blue-100'} >
                                <span  className={location.pathname === item.Linkto ? 'text-scogoprimary material-icons 2xl:text-font24 text-font16' : 'text-scogogray material-icons 2xl:text-font24 text-font16'}>{item.imgSrc}</span>
                                <p className={location.pathname === item.Linkto ? 'text-scogoprimary text-font12 mt-2 font-medium ' : 'text-scogogray text-font12 mt-2 font-medium'}>{item.name}</p>
                            </Link>
                        )
                    })}
                </div>
                :
                null
            }

        </>
    )
}

export default Sidebar
