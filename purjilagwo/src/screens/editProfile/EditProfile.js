
import { Box, Button, Container, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputBox from "../../components/InputBox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ProfileUpdate from "../../services/Update.services";

function EditProfile() {
  // debugger;
  const [value, setValue] = useState({
    id: 116,
    image:"",
    name: "",
    phonenumber: "",
    email: "",
    gender: "",
    dateofbirth: "",
    education: "",
    experience: "",
    specialization: "",
    description: "",
    lunchTime: "",
    availableTime: "",
    consultantFee: "",
    houseNoStreetArea: "",
    colonyStreetLocality: "",
    city: "",
    state: "",
    country: "",
    days: "",
    pincode: "",
    extraphonenumbers: "",
    language: "",
  });
  const [day, setDays] = useState({
    monday: false,
    tuesday: false,
    Wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [image, setImage] = useState(null);
  const [lunchTime, setLunchTime] = useState(() => [
    dayjs('2022-04-17T11:30'),
    dayjs('2022-04-17T19:30'),
  ])
  const [availableTime, setAvailableTime] = useState(() => [
    dayjs('2022-04-17T11:30'),
    dayjs('2022-04-17T19:30'),
  ])

  const handleUpdateProfile = async () => {
    debugger;
    value.lunchTime = lunchTime[0].format('HH:mm') + " - " + lunchTime[1].format('HH:mm');
    value.availableTime = availableTime[0].format('HH:mm') + " - " + availableTime[1].format('HH:mm');
    try {
      const response = await ProfileUpdate.UpdateProfile(value);

      if (response.ok) {
        debugger;
        const responseData = await response.json();
        console.log('Profile updated successfully:', responseData);
      } else {
        console.error('Error updating profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    debugger;
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value
    }));

    console.log(value);
  };
  const handleDayChange = (id) => {
      setDays((prevDays) => ({
        ...prevDays,
        [id]: !prevDays[id], // Toggle the checkbox state
      }));
    const selectedDays = Object.keys(day).filter((key) => day[key]);
    debugger;
    setValue({
      ...value,
      days: selectedDays,
    });

  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (upload) => {
      debugger;
      const base64Image = upload.target.result;
      setImage(base64Image);
  
      // Update the 'image' property in the 'value' state with base64 format
      setValue((prevValue) => ({
        ...prevValue,
        image: base64Image,
      }));
    };
  
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
      // You can also send the image to the backend here (as base64 or other format)
    }
  };

  const genderArray = ["Male", "Female", "Other"];
  const languageArray = ["Hindi", "English", "Other"];
  const countryArray = ["India", "Other"];
  const experienceArray = ["0-2 yrs", "2-4 yrs", "4-6 yrs", "6-8 yrs", "8-10 yrs", "10-12 yrs", "12-14 yrs", "14-16 yrs", "16-18yrs", "18-20 yrs", "20+ yrs"];

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

              onClick={handleUpdateProfile}
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
              <Avatar src={image || ""} sx={{ width: 100, height: 100 }} />
                <Box sx={{ ml: 2, mt: 2 }}>
                  <Typography sx={{ fontSize: "10px", width: "60%" }}>Pick a photo from your computer</Typography>
                  <Button sx={{ textTransform: "none" }} component="label">
                    <Typography sx={{ fontSize: "10px", color: "#3FA1F2" }}>Add photo</Typography>
                    <input
                      hidden
                      accept="image/png,image/jpg,image/svg,image/jpeg"
                      type="file"
                      onChange={handleImageChange} 
                    />
                  </Button>
                </Box>
              </Box>
            </Box>

            <InputBox
              id="name"  // Use "name" as the id
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
                id="phonenumber"
                title="Phone number"
                type="edit"
                value={value.phonenumber}
              //to="/edit/phone"
              />
              <InputBox
                id="email"
                title="Email"
                type="edit"
                value={value.email}
              //to="/edit/email"
              />
              <InputBox
                id="gender"
                title="Gender"
                type="dropdown"
                value={value.gender}
                array={genderArray}
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
                id="dateofbirth"
                title="Date of birth"
                type="calender"
                value={value.dateofbirth}
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
                value={value.education}
                handleChange={handleChange}
              />
              <InputBox
                id="experience"
                title="Experience"
                type="dropdown"
                value={value.experience}
                handleChange={handleChange}
                array={experienceArray}
              />
              <InputBox
                id="specialization"
                title="Specialization"
                type="text"
                value={value.specialization}
                handleChange={handleChange}
              />

            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #dedede", pb: 5, display: "flex", justifyContent: { xs: "center", lg: "start" }, }}>
            <Box
              sx={{
                width: { xs: "16rem", md: "100%", lg: "80%" },
              }}
            >
              <InputBox
                id="description"
                title="Description"
                type="textarea"
                value={value.description}
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
          <Box sx={{ pt: 2, display: "flex", justifyContent: { xs: "center", lg: "start" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "16rem", md: "100%", lg: "80%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "start", md: "left" }
              }}
            >
              <InputBox
                id="monday"
                label="Monday"
                type="checkbox"
                checked={day.monday}
                handleChange={() => handleDayChange("monday")}
              />
              <InputBox
                id="tuesday"
                label="Tuesday"
                type="checkbox"
                value={day.tuesday}
                handleChange={() => handleDayChange("tuesday")}
              />

              <InputBox
                id="wednesday"
                label="Wednesday"
                type="checkbox"
                value={day.Wednesday}
                handleChange={() => handleDayChange("wednesday")}
              />
              <InputBox
                id="thursday"
                label="Thursday"
                type="checkbox"
                value={day.thursday}
                handleChange={() => handleDayChange("thursday")}
              />
              <InputBox
                id="friday"
                label="Friday"
                type="checkbox"
                value={day.friday}
                handleChange={() => handleDayChange("friday")}
              />
              <InputBox
                id="saturday"
                label="Saturday"
                type="checkbox"
                value={day.saturday}
                handleChange={() => handleDayChange("saturday")}
              />
              <InputBox
                id="sunday"
                label="Sunday"
                type="checkbox"
                value={day.sunday}
                handleChange={() => handleDayChange("sunday")}
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
                id="availableTime"
                title="Available Time"
                time={lunchTime}
                setTime={setLunchTime}
              />

              <TimeRangePicker
                id="lunchTime"
                title="Lunch Time"
                time={availableTime}
                setTime={setAvailableTime}
              />

              <InputBox
                id="consultantFee"
                title="Consultant Fee"
                type="text"
                value={value.consultantFee}
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
                id="houseNoStreetArea"
                title="House No./ Street Name/ Area"
                type="text"
                value={value.houseNoStreetArea}
                handleChange={handleChange}
              />
              <InputBox
                id="colonyStreetLocality"
                title="Colony / Street / Locality"
                type="text"
                value={value.colonyStreetLocality}
                handleChange={handleChange}
              />
              <InputBox
                id="city"
                title="City"
                type="text"
                value={value.city}
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
                id="state"
                title="State"
                type="text"
                value={value.state}
                handleChange={handleChange}
              />
              <InputBox
                id="country"
                title="Country"
                type="dropdown"
                required
                value={value.country}
                handleChange={handleChange}
                array={countryArray}
              />
              <InputBox
                id="pincode"
                title="Pincode"
                type="text"
                value={value.pincode}
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
                id="extraphonenumbers"
                title="Extra phone numbers"
                type="text"
                value={value.extraphonenumbers}
                handleChange={handleChange}
              />

              <Box mx="2.4rem"></Box>
              <InputBox
                id="language"
                title="Language"
                type="dropdown"
                required
                array={languageArray}
                value={value.language}
                handleChange={handleChange}
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


  useEffect(() => {
    if(props.time){
      setValue(props.time)
    }
  }, [props.time])
  

  const handleSet = () =>{
    props.setTime(value)
    setOpen(false)
  }

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
          value={value[0].format('HH:mm') + " - " + value[1].format('HH:mm')}
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
          <Button autoFocus onClick={handleSet}>
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditProfile;
