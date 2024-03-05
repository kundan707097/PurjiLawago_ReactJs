
import { Box, Button, Container, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Autocomplete } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputBox from "../../components/InputBox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ProfileUpdate from "../../services/Update.services";
import { DoctorProfileData, PatientProfileData } from "../../models/Index";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { CustomizedButton } from "../../components/Button";
import { useSnackbar } from "notistack";
import { medicalSpecialties, searchkeywords } from "../../constants/doctors";
import ImageCropper from "../../components/ImageCropper";

function EditProfile() {
  // debugger;
  const [id, setID] = useState(localStorage.getItem('id'));
  const [isDoctor, setIsDoctor] = useState(localStorage.getItem('isDocotrsOrPatiets'));
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState({
    name: "",
    gender: "Male",
    education: "",
    experience: "",
    specialization: [],
    keywords: [],
    description: "",
    consultantFee: "",
    houseNoStreetArea: "",
    colonyStreetLocality: "",
    city: "",
    state: "",
    country: "India",
    days: "",
    pincode: "",
    extraphonenumbers: "",
    language: "Hindi",
    hospitalName: ""
  });
  const [day, setDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState(() => dayjs('2000-01-01'));
  const [availableTime, setAvailableTime] = useState(() => [
    dayjs('2022-04-17T10:00'),
    dayjs('2022-04-17T19:30'),
  ])
  const [lunchTime, setLunchTime] = useState(() => [
    dayjs('2022-04-17T13:00'),
    dayjs('2022-04-17T14:30'),
  ]);
  const [imgCurrentState, setImgCurrentState] = useState("choose-img")
  const [afterCrop, setAfterCrop] = useState("")

  function dateCoverter(inputDate) {
    const dateObject = new Date(inputDate);
    // Extract components of the date
    const year = dateObject.getFullYear();
    const month = (`0${dateObject.getMonth() + 1}`).slice(-2); // Adding 1 because months are zero-based
    const day = (`0${dateObject.getDate()}`).slice(-2);
    const hours = (`0${dateObject.getHours()}`).slice(-2);
    const minutes = (`0${dateObject.getMinutes()}`).slice(-2);

    // Construct the desired format
    const outputDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    return outputDate;
  }


  //Function for get the profile data 

  useEffect(() => {
    (async () => {
      if (isDoctor !== null || isDoctor !== undefined) {
        try {
          if (isDoctor === "true") {
            setLoading(true)
            const responseData = await ProfileUpdate.GetProfileData(`DoctorsInformation/DoctorsProfileById?id=${id}`);

            if (responseData != null) {
              console.log('Profile data:', responseData);
              setImage(responseData.image);
              if (responseData.dateofbirth !== null) {
                setDob(dayjs(responseData.dateofbirth));
              }
              if (responseData.lunchTime !== null) {

                setLunchTime(responseData.lunchTime.split('/').map((time) => dayjs(time)));
              }
              if (responseData.availableTime !== null) {

                setAvailableTime(responseData.availableTime.split('/').map((time) => dayjs(time)));
              }
              if (responseData.days !== null) {

                const newObj = {};
                for (const key in day) {
                  responseData.days.includes(key) ? (newObj[key] = true) : (newObj[key] = false);
                }
                setDays(newObj);

              }

              setValue({
                name: responseData.name,
                gender: responseData.gender,
                education: responseData.education,
                experience: responseData.experience,
                specialization: responseData.specialization,
                description: responseData.description,
                consultantFee: responseData.consultantFee,
                houseNoStreetArea: responseData.houseNoStreetArea,
                colonyStreetLocality: responseData.colonyStreetLocality,
                city: responseData.city,
                state: responseData.state,
                country: responseData.country,
                pincode: responseData.pincode,
                extraphonenumbers: responseData.extraPhoneNumbers,
                language: responseData.language,
                keywords: responseData.keywords,


              })
              setEmail(responseData.email);
              setPhoneNumber(responseData.phoneNumber);
              setLoading(false);
              console.log(value)
            }
          }
          else if (isDoctor === "false") {

            const responseData = await ProfileUpdate.GetProfileData(`PatientDetails/Get-Patientd-Details?id=${id}`);
            console.log(responseData)
            if (responseData !== null) {
              console.log('Profile data:', responseData);
              setImage(responseData.profile_Picture);
              if (responseData.dateOfBirth !== null) {
                setDob(dayjs(responseData.dateOfBirth));
              }
              setValue({
                name: responseData.user_Name,
                gender: responseData.gender,
                houseNoStreetArea: responseData.patient_Address,
                colonyStreetLocality: responseData.colonyStreetLocality,
                city: responseData.city,
                state: responseData.state,
                country: responseData.country,
                pincode: responseData.pincode,

              })
              setEmail(responseData.email);
              setPhoneNumber(responseData.moblie_Number);
            }
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }

    })();

  }, [])


  const handleUpdateProfile = async () => {
    debugger;
    if (isDoctor === "true") {
      handleDoctorUpdateProfile();
    }
    else if (isDoctor === "false") {
      handlePatientUpdateProfile();
    }
  };

  const handleDoctorUpdateProfile = async () => {
    const selectedDays = Object.keys(day).filter((key) => day[key] === true);
    debugger;
    const doctor_profile_data = DoctorProfileData;
    doctor_profile_data.Id = parseInt(id, 10);
    doctor_profile_data.Image = image;
    doctor_profile_data.Name = value.name;
    doctor_profile_data.PhoneNumber = phoneNumber;
    doctor_profile_data.Email = email;
    doctor_profile_data.Gender = value.gender;
    doctor_profile_data.DateOfBirth = dob.format('YYYY-MM-DD')
    doctor_profile_data.Education = value.education;
    doctor_profile_data.Experience = value.experience;
    doctor_profile_data.Specialization = value.specialization;
    doctor_profile_data.Keywords = value.keywords;
    doctor_profile_data.Description = value.description;
    doctor_profile_data.LunchTime = dateCoverter(lunchTime[0].$d) + "/" + dateCoverter(lunchTime[1].$d);
    doctor_profile_data.AvailableTime = dateCoverter(availableTime[0].$d) + "/" + dateCoverter(availableTime[1].$d);
    doctor_profile_data.ConsultantFee = value.consultantFee;
    doctor_profile_data.HouseNoStreetArea = value.houseNoStreetArea;
    doctor_profile_data.ColonyStreetLocality = value.colonyStreetLocality;
    doctor_profile_data.City = value.city;
    doctor_profile_data.State = value.state;
    doctor_profile_data.Country = value.country;
    doctor_profile_data.Days = selectedDays;
    doctor_profile_data.Pincode = value.pincode;
    doctor_profile_data.ExtraPhoneNumbers = value.extraphonenumbers;
    doctor_profile_data.Language = value.language;
    console.log(doctor_profile_data);

    try {
      const response = await ProfileUpdate.UpdateProfile(doctor_profile_data, "/DoctorsInformation/update");
      debugger;
      console.log(response)
      if (response.status === 200) {
        debugger;
        enqueueSnackbar("Updates Successfully", { variant: "success" })
      } else {
        enqueueSnackbar("Error", { variant: "error" })
      }
    } catch (error) {
      enqueueSnackbar("Server Error", { variant: "error" })
    }
  }

  const handlePatientUpdateProfile = async () => {

    let patient_profile_data = PatientProfileData;
    patient_profile_data.id = id;
    patient_profile_data.user_Name = value.name;
    patient_profile_data.profile_Picture = image;
    patient_profile_data.email = email;
    patient_profile_data.moblie_Number = phoneNumber;
    patient_profile_data.patient_Address = value.houseNoStreetArea;
    patient_profile_data.city = value.city;
    patient_profile_data.state = value.state;
    patient_profile_data.pinCode = value.pincode;
    patient_profile_data.gender = value.gender;
    patient_profile_data.dateOfBirth = dob.format('YYYY-MM-DD');

    try {
      const response = await ProfileUpdate.UpdateProfile(patient_profile_data, '/PatientDetails/Update-Patient-Details');
      if (response.status === 200) {
        debugger;
        enqueueSnackbar("Updated Successfully", { variant: "success" })
      } else {
        enqueueSnackbar("Error", { variant: "error" })
      }
    } catch (error) {
      enqueueSnackbar("Internal Server Error", { variant: "error" })
    }
  }

  const handleChange = (e) => {
    debugger;
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value
    }));

  };
  const handleDayChange = (event) => {
    day[event.target.id] = event.target.checked;
    setDays({ ...day });
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (upload) => {
      debugger;
      const base64Image = upload.target.result;
      setImage(base64Image);
      setImgCurrentState('crop-img')

      // Update the 'image' property in the 'value' state with base64 format
      // setValue((prevValue) => ({
      //   ...prevValue,
      //   image: base64Image,
      // }));
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
      // You can also send the image to the backend here (as base64 or other format)
    }
  };

  const onCrop = (imgCroppedArea) => {
    const canvasEle = document.createElement('canvas');
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imgObj1 = new Image();
    imgObj1.src = image;
    imgObj1.onload = function () {
      context.drawImage(imgObj1, imgCroppedArea.x, imgCroppedArea.y, imgCroppedArea.width, imgCroppedArea.height, 0, 0, imgCroppedArea.width, imgCroppedArea.height)
    }
    const dataUrl = canvasEle.toDataURL("image/png");
    setAfterCrop(dataUrl);
    setImgCurrentState("img-cropped")
  }

  const onCropCancel = () => {
    setImgCurrentState("choose-img")
  }

  const genderArray = ["Male", "Female", "Other"];
  const languageArray = ["Hindi", "English", "Other"];
  const countryArray = ["India", "Other"];
  const experienceArray = ["0-2 yrs", "2-4 yrs", "4-6 yrs", "6-8 yrs", "8-10 yrs", "10-12 yrs", "12-14 yrs", "14-16 yrs", "16-18yrs", "18-20 yrs", "20+ yrs"];

  return (
    <>
      {loading ? (<Loading />) : (<Box sx={{ backgroundColor: "#F8FCFB", width: "100%", p: 4, py: 6, }}>

        {/* container for update */}
        <Container
          sx={{ backgroundColor: "white", borderBottom: "1px solid #dedede", borderRadius: "15px 15px 0 0" }}
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
            <Box sx={{ width: { xs: "85%", lg: "25%" } }}>
              <InputBox
                name="name"  // Use "name" as the id
                title="Name"
                boxType="text"
                type="text"
                value={value.name}
                onChange={handleChange}
                required
              />

            </Box>

          </Box>
        </Container>

        {/* Container for phone and email and gender */}

        <Container sx={{ backgroundColor: "white" }}>

          <Box sx={{ pt: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                <UpdatePhoneNumber
                  title="Phone number"
                  value={phoneNumber}
                  setValue={setPhoneNumber}
                />
              </Box>

              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                <UpdateEmail
                  title="Email"
                  value={email}
                  setValue={setEmail}
                />

              </Box>

              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                <InputBox
                  name="gender"
                  title="Gender"
                  boxType="dropdown"
                  type="dropdown"
                  value={value.gender}
                  array={genderArray}
                  onChange={handleChange}
                />

              </Box>

            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #dedede", py: { xs: 0, lg: 4 } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <Box sx={{ width: { xs: "85%", lg: "30%" }, }}>
                <InputBox
                  name="dateofbirth"
                  title="Date of birth"
                  boxType="calender"
                  type="calender"
                  value={dob}
                  setValue={setDob}
                />

              </Box>

            </Box>
          </Box>
        </Container>


        {isDoctor === "true" && (

          <>
            {/* Container for Doctor's Details */}

            <Container sx={{ backgroundColor: "white" }}>
              <Typography fontSize={"13px"} sx={{ pt: 4 }}>
                Doctor's Details
              </Typography>
              <Box sx={{ py: 3, pb: { xs: 0, lg: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
                  }}
                >

                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                    <InputBox
                      name="education"
                      title="Education"
                      boxType="text"
                      type="text"
                      value={value.education}
                      onChange={handleChange}
                    />

                  </Box>

                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                    <InputBox
                      name="experience"
                      title="Experience"
                      boxType="dropdown"
                      type="dropdown"
                      value={value.experience}
                      onChange={handleChange}
                      array={experienceArray}
                    />

                  </Box>

                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                    <SpecializationPicker title="Specialization" setValue={setValue} value={value.specialization} />

                  </Box>

                </Box>
              </Box>

              <Box sx={{ pb: { xs: 0, lg: 3 } }}>
                <Box
                  sx={{
                    display: "flex",

                    width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
                  }}
                >
                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                    <InputBox
                      name="hospitalName"
                      title="Hospital Name"
                      boxType="text"
                      type="text"
                      value={value.hospitalName}
                      onChange={handleChange}
                    />

                  </Box>
                  <Box mx="1.5rem" />

                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                    <KeywordPicker title="Searching Keywords" setValue={setValue} value={value.keywords} />

                  </Box>

                </Box>
              </Box>

              <Box sx={{ borderBottom: "1px solid #dedede", pb: 5, display: "flex", justifyContent: { xs: "center", lg: "start" }, }}>
                <Box
                  sx={{
                    width: "87% ",
                  }}
                >
                  <InputBox
                    name="description"
                    title="Description"
                    boxType="textarea"
                    type="textarea"
                    value={value.description}
                    onChange={handleChange}
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
                    width: "87%", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "start", md: "left" }
                  }}
                >
                  <InputBox
                    id="monday"
                    label="Monday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.monday}
                    onClick={handleDayChange}
                  />
                  <InputBox
                    id="tuesday"
                    label="Tuesday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.tuesday}
                    onClick={handleDayChange}
                  />

                  <InputBox
                    id="wednesday"
                    label="Wednesday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.wednesday}
                    onClick={handleDayChange}
                  />
                  <InputBox
                    id="thursday"
                    label="Thursday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.thursday}
                    onClick={handleDayChange}
                  />
                  <InputBox
                    id="friday"
                    label="Friday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.friday}
                    onClick={handleDayChange}
                  />
                  <InputBox
                    id="saturday"
                    label="Saturday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.saturday}
                    onClick={handleDayChange}
                  />
                  <InputBox
                    id="sunday"
                    label="Sunday"
                    boxType="checkbox"
                    type="checkbox"
                    checked={day.sunday}
                    onClick={handleDayChange}
                  />
                </Box>
              </Box>
              <Box sx={{ borderBottom: "1px solid #dedede", pb: 5, pt: 3 }}>
                <Box
                  sx={{
                    display: "flex", justifyContent: "space-between",
                    width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
                  }}
                >
                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                    <TimeRangePicker
                      id="availableTime"
                      title="Available Time"
                      time={availableTime}
                      setTime={setAvailableTime}
                    />

                  </Box>

                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                    <TimeRangePicker
                      id="lunchTime"
                      title="Lunch Time"
                      time={lunchTime}
                      setTime={setLunchTime}
                    />

                  </Box>

                  <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                    <InputBox
                      name="consultantFee"
                      title="Consultant Fee"
                      boxType="text"
                      type="text"
                      value={value.consultantFee}
                      onChange={handleChange}
                    />

                  </Box>

                </Box>
              </Box>
            </Container>
          </>)}

        {/* Container for address */}

        <Container sx={{ backgroundColor: "white" }}>
          <Typography fontSize={"13px"} sx={{ pt: 4 }}>
            Address
          </Typography>

          <Box sx={{ py: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                <InputBox
                  name="houseNoStreetArea"
                  title="House No./ Street Name/ Area"
                  boxType="text"
                  type="text"
                  value={value.houseNoStreetArea}
                  onChange={handleChange}
                />

              </Box>

              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                <InputBox
                  name="colonyStreetLocality"
                  title="Colony / Street / Locality"
                  boxType="text"
                  type="text"
                  value={value.colonyStreetLocality}
                  onChange={handleChange}
                />

              </Box>

              <Box sx={{ width: { xs: "85%", lg: "30%" }, }}>

                <InputBox
                  name="city"
                  title="City"
                  boxType="text"
                  type="text"
                  value={value.city}
                  onChange={handleChange}
                />

              </Box>

            </Box>
          </Box>

          <Box sx={{ borderBottom: "1px solid #dedede", pb: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", lg: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >

              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                <InputBox
                  name="state"
                  title="State"
                  boxType="text"
                  type="text"
                  value={value.state}
                  onChange={handleChange}
                />

              </Box>

              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                <InputBox
                  name="country"
                  title="Country"
                  boxType="dropdown"
                  type="dropdown"
                  required
                  value={value.country}
                  onChange={handleChange}
                  array={countryArray}
                />

              </Box>

              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>

                <InputBox
                  name="pincode"
                  title="Pincode"
                  boxType="number"
                  type="number"
                  value={value.pincode}
                  onChange={handleChange}
                />

              </Box>

            </Box>
          </Box>
        </Container>

        {/* Container for other information */}
        <Container sx={{ backgroundColor: "white", borderRadius: "0 0 15px 15px" }}>
          <Typography fontSize={"13px"} sx={{ pt: 4 }}>
            Other Information
          </Typography>
          <Box sx={{ pb: 6, pt: 3 }}>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", md: "87%" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "left" }
              }}
            >
              <Box sx={{ width: { xs: "85%", lg: "30%" }, mb: { xs: 3, lg: 0 } }}>
                <InputBox
                  name="extraphonenumbers"
                  title="Extra phone numbers"
                  boxType="number"
                  type="number"
                  value={value.extraphonenumbers}
                  onChange={handleChange}
                />

              </Box>

              <Box mx="1.5rem" />
              <Box sx={{ width: { xs: "85%", lg: "30%" }, }}>
                <InputBox
                  name="language"
                  title="Language"
                  boxType="dropdown"
                  type="dropdown"
                  required
                  array={languageArray}
                  value={value.language}
                  onChange={handleChange}
                />
              </Box>

            </Box>
          </Box>
        </Container>
      </Box >)
      }
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
    if (props.time) {
      setValue(props.time)
    }
  }, [props.time])


  const handleSet = () => {
    props.setTime(value)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false);
  };

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
          <input
            type="text"
            style={{
              border: "1px solid #64EBB6",
              padding: "10px",
              backgroundColor: "white",
              // color: '#42A5F5',
              borderRadius: "10px",
              width: "100%",
              fontFamily: "nunito",
              cursor: "pointer"
            }}
            onClick={() => setOpen(true)}
            value={value[0].format('HH:mm') + " - " + value[1].format('HH:mm')}
          />

        </Box>

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

const SpecializationPicker = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState([]);

  const handleClose = () => {
    setValue([]);
    setOpen(false);
  };

  const handleSet = () => {
    props.setValue((prevValue) => ({
      ...prevValue,
      specialization: value,
    }))
    setOpen(false)
  }

  useEffect(() => {
    if (props.value !== null && props.value.length !== 0) {
      setValue(props.value)
    }
  }, [props])


  const handleSelectionChange = (_, newValue) => {
    setValue(newValue);
  };

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
          <input
            type="text"
            style={{
              border: "1px solid #64EBB6",
              padding: "10px",
              backgroundColor: "white",
              // color: '#42A5F5',
              borderRadius: "10px",
              width: "100%",
              fontFamily: "nunito",
              cursor: "pointer"
            }}
            onClick={() => setOpen(true)}
            value={props.value !== null ? props.value.toString() : ""}
          />

        </Box>
      </Box>

      <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
        <DialogContent sx={{ pt: 3., fontSize: "20px", textAlign: "center", fontWeight: 600 }}>Choose Your Specialization</DialogContent>
        <DialogContent>
          <Autocomplete
            multiple
            // id="tags-outlined"
            options={medicalSpecialties}
            getOptionLabel={(option) => option.toString()}
            // defaultValue={[medicalSpecialties[0]]}
            filterSelectedOptions
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                label="Specialization"
                placeholder="Ex. Dentist, Cardiologist, etc."
              />
            )}
            value={value} onChange={handleSelectionChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button autoFocus onClick={handleSet} sx={{ bgcolor: "#F0F6FF" }}>
            Set
          </Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

const KeywordPicker = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const handleClose = () => {
    setValue([]);
    setOpen(false);
  };

  const handleSet = () => {
    console.log(value.length)
    if (value.length > 10) {
      setErrorMessage("You can select maximum 10 keywords")
      return;
    }
    props.setValue((prevValue) => ({
      ...prevValue,
      keywords: value,
    }))
    setOpen(false)
  }

  useEffect(() => {
    if (props.value !== null && props.value.length !== 0) {
      setValue(props.value)
    }
  }, [props])


  const handleSelectionChange = (_, newValue) => {
    setErrorMessage('')
    setValue(newValue);
  };

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
          <input
            type="text"
            style={{
              border: "1px solid #64EBB6",
              padding: "10px",
              backgroundColor: "white",
              // color: '#42A5F5',
              borderRadius: "10px",
              width: "100%",
              fontFamily: "nunito",
              cursor: "pointer"
            }}
            onClick={() => setOpen(true)}
            value={props.value !== null ? props.value.toString() : ""}
          />

        </Box>
      </Box>

      <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
        <DialogContent sx={{ pt: 3., fontSize: "20px", textAlign: "center", fontWeight: 600 }}>Select Keywords</DialogContent>
        <DialogContent>
          <Autocomplete
            multiple
            // id="tags-outlined"
            options={searchkeywords}
            getOptionLabel={(option) => option.toString()}
            // defaultValue={[medicalSpecialties[0]]}
            filterSelectedOptions
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                label="Keywords"
                placeholder="Ex. जुकाम, फ्लू, etc."
              />
            )}
            value={value} onChange={handleSelectionChange}
          />
          {errorMessage.length > 0 && (<ErrorMessage message={errorMessage} />)}
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ color: "red", fontSize: "14px", }}>
              Suggestion: Select keywords belongs to field of specialization for better pateint experience.
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button autoFocus onClick={handleSet} sx={{ bgcolor: "#F0F6FF" }}>
            Set
          </Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

const UpdatePhoneNumber = (props) => {

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [phone, setPhone] = useState('');

  // After Verfying the opt we set the original value

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
            borderRadius: "10px",
            width: "100%",
            fontFamily: "nunito",
          }}
          value={props.value}
          disabled="true"
        />
      </Box>

      <Dialog open={openEditDialog} maxWidth="xs" fullWidth>
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
              type="number"
              style={{
                fontSize: "14px",
                // backgroundColor: "#F0F6FF",
                border: "1px solid #64EBB6",
                padding: "10px",
                // color: '#42A5F5',
                borderRadius: "10px",
                width: "100%",
                fontFamily: "nunito",
              }}
              value={phone === '' ? props.value : phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>

        </DialogContent>
      </Dialog>

    </>

  );

}

const UpdateEmail = (props) => {

  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (props.value !== '') {
      setEmail(props.value)
    }
  }, [props])

  useEffect(() => {
    if (email !== '') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email])

  function isValidEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmitEmail = () => {

    if (!isValidEmail(email)) {
      setError('Enter a valid email address');
      return;
    }

    console.log(isValidEmail(email));

  }


  // After Verfying the opt we set the original value

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
          <Typography component={"button"} type="button" sx={{ color: "#42A5F5", border: "none", bgcolor: "transparent", p: 0, fontWeight: 600 }} onClick={() => setOpenEmailDialog(true)}>
            Edit
          </Typography>
        </Typography>
        <input
          style={{
            fontSize: "14px",
            backgroundColor: "#F0F6FF",
            border: "1px solid #64EBB6",
            padding: "10px",
            borderRadius: "10px",
            width: "100%",
            fontFamily: "nunito",
          }}
          value={props.value}
          disabled="true"
        />
      </Box>

      <Dialog open={openEmailDialog} maxWidth="xs" fullWidth>
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
              type="email"
              style={{
                fontSize: "14px",
                // backgroundColor: "#F0F6FF",
                border: "1px solid #64EBB6",
                padding: "10px",
                // color: '#42A5F5',
                borderRadius: "10px",
                width: "100%",
                fontFamily: "nunito",
              }}
              value={email === '' ? props.value : email}
              onChange={(e) => setEmail(e.target.value)}
              onInput={() => setError('')}
            />
            {error !== '' && <ErrorMessage message={error} />}

            <Box sx={{ my: 2 }}>

              <CustomizedButton title={"Submit"} disabled={disabled} onClick={handleSubmitEmail} />

            </Box>

          </Box>

        </DialogContent>
      </Dialog>

    </>

  );

}



export default EditProfile;
