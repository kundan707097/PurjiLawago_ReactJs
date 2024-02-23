import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import "./style/InputBox.css";
import { useEffect, useState } from "react";

function InputBox(props) {


  //This usestate is for calender

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dayjs('2022-04-17'));

  useEffect(() => {
    if (props.value != null) {
      setValue(dayjs(props.value))
    }
  }, [props])

  const [openEditDialog, setOpenEditDialog] = useState(false);

  switch (props.boxType) {

    case "calender":



      const handleSet = () => {
        props.setValue(value)
        setOpen(false)
      }

      const handleClose = () => {
        setOpen(false);
      };

      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Typography
              sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <Box className="input-container">
              <input
                // type="time"
                style={{
                  border: "1px solid #64EBB6",
                  padding: "10px",
                  backgroundColor: "white",
                  // color: 'black',
                  borderRadius: "10px",
                  width: "100%",
                  fontFamily: "nunito",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(true)}
                value={props.value && props.value.format('DD/MM/YYYY')}
              />
            </Box>

          </Box>
          <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
            <DialogTitle textAlign={"center"}>Select Your Date of Birth</DialogTitle>
            <DialogContent>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
              </LocalizationProvider>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setOpen(false)}>Close</Button>
              <Button autoFocus onClick={handleSet}>
                Set
              </Button>
            </DialogActions>

          </Dialog>
        </>
      );
    case "edit":



      return (
        <>
          <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#1C4188", fontSize: "16px", fontWeight: 600
              }}
              className={props.required && "required"}
            >
              <span>{props.title}</span>
              <Typography component={"button"} type="button" sx={{ color: "#42A5F5", border: "none", bgcolor: "transparent", p: 0, fontWeight: 600 }} onClick={() => setOpenEditDialog(true)}>
                Edit
              </Typography>
            </Typography>
            <input
              style={{
                fontSize: "14px",
                backgroundColor: "#F0F6FF",
                border: "1px solid #64EBB6",
                padding: "10px",
                color: '#42A5F5',
                borderRadius: "10px",
                width: "100%",
                fontFamily: "nunito",
              }}
              value={props.value}
              disabled="true"
            />
          </Box>

          <Dialog onClose={() => setOpenEditDialog(false)} open={openEditDialog} maxWidth="xs" fullWidth>
            <DialogTitle textAlign={"center"}>Update {props.title}</DialogTitle>
            <DialogContent>
              <Box>
                <Typography
                  sx={{
                    color: "#1C4188", fontSize: "16px", fontWeight: 600
                  }}
                  className={props.required && "required"}
                >
                  New {props.title}
                </Typography>
                <input
                  type={props.type}
                  style={{
                    fontSize: "14px",
                    backgroundColor: "#F0F6FF",
                    border: "1px solid #64EBB6",
                    padding: "10px",
                    color: '#42A5F5',
                    borderRadius: "10px",
                    width: "100%",
                    fontFamily: "nunito",
                  }}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                />
              </Box>

            </DialogContent>
          </Dialog>
        </>
      );
    case "textarea":
      return (
        <>
          <Box sx={{ pb: 3, width: "100%" }}>
            <Typography
              sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <Box>
              <textarea
                style={{
                  border: "1px solid #64EBB6",
                  // fontSize: "14px",
                  padding: "10px",
                  borderRadius: "10px",
                  width: "100%",
                  fontFamily: "nunito",
                  backgroundColor: "white",

                }}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
              />
            </Box>

          </Box>
        </>
      );
    case "dropdown":
      return (
        <>
          <Box>
            <Typography
              sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}
              className={props.required && "required"}
            >
              {props.title}
            </Typography>
            <Box>
              <select
                className="dropdown-input"
                value={props.value}  // Set the value attribute to control the selected value
                onChange={(e) => props.onChange({ target: { name: props.name, value: e.target.value } })}
              >
                {props.array &&
                  props.array.map((item) => {
                    return <option key={item} value={item} style={{ fontSize: "16px", padding: "16px" }}>{item}</option>;
                  })}
              </select>
            </Box>
          </Box>
        </>
      );
    case "checkbox":
      return (
        <>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox id={props.id} checked={props.checked} onClick={props.onClick} />}
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
            <Box>
              <input
                type={props.type}
                name={props.name}
                style={{
                  border: "1px solid #64EBB6",
                  padding: "10px",
                  backgroundColor: "white",
                  // color: 'black',
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
