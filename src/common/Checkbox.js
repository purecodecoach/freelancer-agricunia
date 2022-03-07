import React from 'react'


const Checkbox = ({checkColor , CheckContent}) => {
    return (
        <label className="inline-flex items-center ">
        <input
            type="checkbox"
            className= {`${checkColor} h-4 w-4 rounded-3px  border-2 border-scogo88 focus:outline-none focus:ring-0`}
        />
        <span className="text-scogo15 font-normal text-font15">{CheckContent}</span>
    </label>
    )
}

export default Checkbox
