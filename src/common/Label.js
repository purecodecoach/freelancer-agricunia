import React from 'react'
import { Children } from 'react'

function Label({children, LabelText, Labelcss }) {
    return (
        <div className={`${Labelcss} rounded-md py-p-3 px-p-10 max-w-max`}>
            <p className={LabelText}>
            {children}
            </p>
        </div>
    )
}

export default Label
