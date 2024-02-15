
import { Typography } from '@mui/material'

const ErrorMessage = ({message}) => {
  return (
    <Typography sx={{color: "red", fontSize: "10px", mt:"2px"}}>{message}</Typography>
  )
}

export default ErrorMessage