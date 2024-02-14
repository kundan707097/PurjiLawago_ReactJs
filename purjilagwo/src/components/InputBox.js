import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import "./style/InputBox.css";
import { Link } from "react-router-dom";

function InputBox(props) {
  switch (props.type) {
    case "calender":
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Typography
              sx={{ fontSize: "12px" }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <input
              type="date"
              style={{
                border: "1px solid gray",
                fontSize: "14px",
                padding: "5px",
                width: "16rem",
                borderRadius: "8px",
              }}
              onChange={props.handleChange}
            />
          </Box>
        </>
      );
    case "time":
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Typography
              sx={{ fontSize: "12px" }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <input
              type="time"
              style={{
                border: "1px solid gray",
                fontSize: "14px",
                padding: "5px",
                width: "16rem",
                borderRadius: "8px",
              }}
              onChange={props.handleChange}
            />
          </Box>
        </>
      );
    case "edit":
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "space-between",
                width: "16rem",
              }}
              className={props.required && "required"}
            >
              <span>{props.title}</span>
              <span>
                <Link to={props.to} style={{ color: "#42A5F5" }}>
                  Edit
                </Link>
              </span>
            </Typography>
            <input
              type="text"
              style={{
                border: "1px solid gray",
                fontSize: "14px",
                padding: "5px",
                width: "16rem",
                borderRadius: "8px",
                backgroundColor: "#d2d2d25c",
              }}
              value={props.value}
              disabled="true"
            />
          </Box>
        </>
      );
    case "textarea":
      return (
        <>
          <Box sx={{ pb: 3, width: "100%" }}>
            <Typography
              sx={{ fontSize: "12px" }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <textarea
              style={{
                border: "1px solid gray",
                fontSize: "14px",
                padding: "5px",
                borderRadius: "8px",
                width: "100%",
              }}
              id={props.id}
              onChange={props.handleChange}
            />
          </Box>
        </>
      );
    case "dropdown":
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Typography
              sx={{ fontSize: "12px" }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <select
              className="dropdown-input"
              value={props.value}  // Set the value attribute to control the selected value
              onChange={(e) => props.handleChange({ target: { id: props.id, value: e.target.value } })}
            >
              {props.array &&
                props.array.map((item) => {
                  return <option key={item} value={item}>{item}</option>;
                })}
            </select>
          </Box>
        </>
      );
    case "checkbox":
      return (
        <>
          <FormGroup>
            <FormControlLabel
              id={props.id}
              control={<Checkbox checked={props.checked} onChange={props.handleChange} />}
              label={props.label}
            />
          </FormGroup>
        </>
      );
    default:
      return (
        <>
          <Box>
            <Typography sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}>{props.title}</Typography>
            <Box sx={{ mb: 1 }}>
              <input 
              type={props.type}
              name={props.name}
               style={{
                border: "1px solid #64EBB6",
                padding: "10px",
                backgroundColor: "white",
                color: '#42A5F5',
                borderRadius: "10px",
                width: "100%",
                fontFamily: "nunito",
              }} 
              value={props.value} 
              onChange={props.onChange} />
            </Box>
          </Box>
        </>
      );
  }
}

export default InputBox;
