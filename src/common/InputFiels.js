import React from 'react'

const InputFiels = ({ inputImg, type, inputClass, placeholder, inputImgDiv, inputDiv, onChange, name, value }) => {

    const handleChange = () => {

    }

    return (
        <div className={inputDiv}>
            <div className={inputImgDiv}>
                <img src={inputImg} />
            </div>
            <input
                type={type}
                name={name}
                value={value}
                className={inputClass}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputFiels
