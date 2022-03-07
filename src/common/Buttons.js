import React from 'react'


const Buttons = ({btnimgClass, type, buttonIcon, handleClick, Btnalt, children, buttonClass, onClick}) => {
    return (
        <button
            className={buttonClass}
            type={type}
            onClick={onClick}
        >
            <img src={buttonIcon} className={btnimgClass} alt={Btnalt}/>
            {children}
        </button>
    )
}

export default Buttons
