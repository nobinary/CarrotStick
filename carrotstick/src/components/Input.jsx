import React from 'react'
import './../styles/Input.css'

const Input = props => {
  const {handleChange, name, placeholder, type, value} = props
    return (
      <>
        {/* <label htmlFor={name}>{title}</label> */}
        <input
          className="add_input"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input