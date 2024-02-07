import React from 'react'
import "./style/CustomeButton.css"

export default function CustomeButton({title, onClick, disabled}) {
  return (
    <>
    <button style={{backgroundColor:disabled ? "rgba(128, 128, 128, 0.496)" :"#199FD9"}} className='custome-button' onClick={onClick} disabled={disabled} >{title}</button>
    </>
  )
}
