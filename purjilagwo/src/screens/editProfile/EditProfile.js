
import { Box, Button, Container, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import React, { useState } from "react";
import InputBox from "../../components/InputBox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function EditProfile() {
  const [value, setValue] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const genderArray = ["Male", "Female", "Other"];
  const languageArray = ["Hindi", "English", "Other"];
  const countryArray = ["India", "Other"];
  const experienceArray = ["0-2 yrs", "2-4 yrs", "4-6 yrs", "6-8 yrs", "8-10 yrs", "10-12 yrs", "12-14 yrs", "14-16 yrs", "16-18yrs", "18-20 yrs", "20+ yrs" ];

  return (
    <>
      <Box sx={{ backgroundColor: "#FAFAFA", width: "100%", p: 4 }}>

        {/* container for update */}
        <Container
          sx={{ backgroundColor: "white", borderBottom: "1px solid #dedede" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Accounts</Typography>
            <Button
              variant="contained"
              sx={{
                background: "#42A5F5",
                borderRadius: "12px",
                boxShadow: "none",
                px: 2
              }}
            >
              Update
            </Button>
          </Box>
        </Container>

        {/* Container for profile upload and name */}

        <Container sx={{ backgroundColor: "white" }}>
          <Box sx={{ display: "flex", borderBottom: "1px solid #dedede", pb: 3, pt: 5, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" } }}>
            <Box sx={{ mr: { md: 9, }, mb: { xs: 2 } }}>
              <Typography sx={{ fontSize: "12px", }}>Profile photo</Typography>

              <Box sx={{ display: "flex" }}>
                <Avatar src="" sx={{ width: 100, height: 100 }} />
                <Box sx={{ ml: 2, mt: 2 }}>
                  <Typography sx={{ fontSize: "10px", width: "60%" }}>Pick a photo from your computer</Typography>
                  <Button sx={{ textTransform: "none" }} component="label">
                    <Typography sx={{ fontSize: "10px", color: "#3FA1F2" }}>Add photo</Typography>
                    <input
                      hidden
                      accept="image/png,image/jpg,image/svg,image/jpeg"
                      type="file"
                      onChange={(e) => { }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>

            <InputBox
              id="name"
              title="Name"
              type="text"
              value={value.name}
              handleChange={handleChange}
              required
            />
          </Box>
        </Container>

        {/* Container for phone and email */}

        <Container sx={{ backgroundColor: "white" }}>

          <Box sx={{ pt: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <InputBox
                id="name"
                title="Phone number"
                type="edit"
                value={value.name}
                to="/edit/phone"
              />
              <InputBox
                id="name"
                title="Email"
                type="edit"
                value={value.name}
                to="/edit/email"
              />
              <InputBox
                id="name"
                title="Gender"
                type="dropdown"
                array={genderArray}
              />
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #dedede", pb: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <InputBox
                id="date"
                title="Date of birth"
                type="calender"
                value={value.name}
                handleChange={handleChange}
              />
            </Box>
          </Box>
        </Container>

        {/* Container for Doctor Details */}

        <Container sx={{ backgroundColor: "white" }}>
          <Typography fontSize={"13px"} sx={{ pt: 4 }}>
            Doctor's Details
          </Typography>
          <Box sx={{ pt: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <InputBox
                id="education"
                title="Education"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="experience"
                title="Experience"
                type="dropdown"
                value={value.name}
                handleChange={handleChange}
                array={experienceArray}
              />
              <InputBox
                id="specialization"
                title="Specialization"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />

            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #dedede", pb: 5,display: "flex", justifyContent:{ xs: "center" ,lg: "start"},}}>
            <Box
              sx={{
                width: { xs: "16rem",md: "100%" ,lg: "80%" },
              }}
            >
              <InputBox
                id="name"
                title="Description"
                type="textarea"
                value={value.name}
                handleChange={handleChange}
              />
            </Box>
          </Box>
        </Container>

        {/* Container for Availability Details */}
        
        <Container sx={{ backgroundColor: "white" }}>
          <Typography fontSize={"13px"} sx={{ pt: 4 }}>
            Availability
          </Typography>
          <Box sx={{ pt: 2, display: "flex",justifyContent: {xs: "center", lg: "start"} }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "16rem",md: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "start", md: "left" }
              }}
            >
              <InputBox
                id="name"
                label="Monday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                label="Tuesday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />

              <InputBox
                id="name"
                label="Wednesday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                label="Thursday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                label="Friday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                label="Saturday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                label="Sunday"
                type="checkbox"
                value={value.name}
                handleChange={handleChange}
              />
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #dedede", pb: 5, pt: 3 }}>
            <Box
              sx={{
                display: "flex", justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <TimeRangePicker
                id="name"
                title="Available Time"
              />

              <TimeRangePicker
                id="name"
                title="Lunch Time"
              />

              <InputBox
                id="name"
                title="Consultant Fee"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
            </Box>
          </Box>
        </Container>

        {/* Container for address */}

        <Container sx={{ backgroundColor: "white" }}>
          <Typography fontSize={"13px"} sx={{ pt: 4 }}>
            Address
          </Typography>
          <Box sx={{ pt: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <InputBox
                id="name"
                title="House No./ Street Name/ Area"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                title="Colony / Street / Locality"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                title="City"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #dedede", pb: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <InputBox
                id="name"
                title="State"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
              <InputBox
                id="name"
                title="Country"
                type="dropdown"
                required
                array={countryArray}
              />
              <InputBox
                id="name"
                title="Pincode"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
            </Box>
          </Box>
        </Container>

        {/* Container for other information */}
        <Container sx={{ backgroundColor: "white" }}>
          <Typography fontSize={"13px"} sx={{ pt: 4 }}>
            Other Information
          </Typography>
          <Box sx={{ pb: 6, pt: 3 }}>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", md: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <InputBox
                id="name"
                title="Extra phone numbers"
                type="text"
                value={value.name}
                handleChange={handleChange}
              />

              <Box mx="2.4rem"></Box>
              <InputBox
                id="launguage"
                title="Language"
                type="dropdown"
                required
                array={languageArray}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const TimeRangePicker = (props) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(() => [
    dayjs('2022-04-17T15:30'),
    dayjs('2022-04-17T18:30'),
  ]);

  //Take this as reference while sending to db
  console.log(value[0].format('HH:mm'))
  console.log(value[1].format('HH:mm'))

  const handleClose = () => {
    setOpen(false);
  };

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
          type="text"
          style={{
            border: "1px solid gray",
            fontSize: "14px",
            padding: "5px",
            width: "16rem",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={() => setOpen(true)}
        />
      </Box>
      <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={['SingleInputTimeRangeField']}
            >
              <SingleInputTimeRangeField
                label={props.title}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button autoFocus>
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditProfile;
