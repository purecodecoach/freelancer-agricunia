import React from 'react'

function ProName({ children }) {
    return (
        <p className="text-white 2xl:text-font13 text-font11 font-normal mt-2 bg-scogoprimary px-p-10 py-p-3 rounded-xl max-w-max">
            {children}
            <span className="border-l border-white py-2 ml-1 cursor-pointer">
                <span class="ml-1 material-icons 2xl:text-font15 text-font12 ">
                    edit
                </span>
            </span>
        </p>

    )
}

export default ProName
