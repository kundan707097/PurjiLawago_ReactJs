import React from 'react'
import "./style/CustomeButton.css"
import { Button } from "@mui/material";

export default function CustomeButton({ title, onClick, disabled }) {
  return (
    <>
      <button style={{ backgroundColor: disabled ? "rgba(128, 128, 128, 0.496)" : "#199FD9" }} className='custome-button' onClick={onClick} disabled={disabled} >{title}</button>
    </>
  )
}

export const CustomizedButton = ({title, onClick, type, disabled}) => {
  return (
    <Button sx={{ bgcolor: disabled? "rgba(128, 128, 128, 0.496)" : "#42A5F5", color: "white", width: "100%", p: "10px", borderRadius: "10px", fontFamily: "nunito", "&:hover": { bgcolor: "white", color: "#42A5F5" } }} onClick={onClick} type={type} disabled={disabled}>{title}</Button>
  )
}