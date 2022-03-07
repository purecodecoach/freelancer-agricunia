import React from 'react'

const Bedges = ({className ,children}) => {
    return (
        <>
        <div className = {className}>
            <p className={typeof children !== "string" ? children.props.className : "text-white font-semibold text-center 2xl:text-font13 text-font11"}>{children}</p>
        </div>
        </>
    )
}

export default Bedges
