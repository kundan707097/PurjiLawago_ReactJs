import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import AuthenticationService from "../../services/Authentication.services";
import { Register, LoginValue } from "../../models/Index";
import { Box, Container, Typography } from '@mui/material';
import InputBox from '../../components/InputBox';
import { CustomizedButton } from '../../components/Button';
import MobileAppBanner from '../../components/MobileAppBanner';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';
import MessageBar from '../../components/MessageBar';
import BackdropLoading from '../../components/BackdropLoading';
import { OtpVerificationDialogBox } from '../../components/DialogBox';
import { useSnackbar } from 'notistack';

const Login = () => {

  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const [activeTab, setActiveTab] = useState('login');
  const [isDoctor, setIsDoctor] = useState(false);
  const [inputValues, setInputValues] = useState({
    fullName: '',
    mobileNumber: '',
    emailOrPhoneNumber: '',
    loginPassword: '',
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState({
    ForLogin: false,
    ForRegister: false,

  });
  const [backdropLoading, setBackdropLoading] = useState(false);

  const [otp, setOtp] = useState("");
  const [openLoginOtpBox, setOpenLoginOtpBox] = useState(false);
  const [openRegisterOtpBox, setOpenRegisterOtpBox] = useState(false);
  const [messageProperty, setMessageProperty] = useState({
    openDialog: false,
    dialogTitle: "",
    dialogContent: "",
    variant: "",
  });

  const validationSchema = (activeTab = 'login') => {
    return yup.object().shape({
      emailOrPhoneNumber: activeTab === 'login'
        ? yup.string().required('Email or Phone Number is required')
        : yup.string(),
      loginPassword: activeTab === 'login'
        ? yup.string().required('Password is required')
        : yup.string(),
      fullName: activeTab === 'register'
        ? yup.string().required('Full Name is required')
        : yup.string(),
      mobileNumber: activeTab === 'register'
        ? yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone Number is required')
        : yup.string(),
      password: activeTab === 'register'
        ? yup.string().required('Password is required')
        : yup.string(),
    });
  };

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(validationSchema(activeTab)),
  });

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    setButtonDisabled({
      ForLogin: false,
      ForRegister: false
    })
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setValue(name, value, { shouldValidate: true });
  };

  const toggleDoctorStatus = () => {
    setIsDoctor(!isDoctor);
  }

  const onSubmit = async (data) => {
    console.log(data);
    // debugger
    if (activeTab === "register") {
      handleRegistration(data);
    } else {
      handleLogin(data);
    }
  };

  const handleLogin = async (loginData) => {
    setButtonDisabled({ ForLogin: true })
    let value = LoginValue;
    // debugger;
    value.emailOrPhoneNumber = loginData.emailOrPhoneNumber;
    value.password = loginData.loginPassword;
    setBackdropLoading(true);
    const response = await AuthenticationService.Login(value);
    // setOpenLoginOtpBox(true);
    if (response !== undefined) {
      if (response.requiresVerification === true && response.isSuccess === false)  {
        // this means we need to verify the user
        setOpenLoginOtpBox(false);
      } else if(response.requiresVerification === false && response.isSuccess === true){
        localStorage.setItem("token", response.token);
        localStorage.setItem("fullName", response.fullName);
        localStorage.setItem("phoneNumber", response.phoneNumber);
        localStorage.setItem("isDocotrsOrPatiets", response.isDocotrsOrPatiets);
        navigate("/")
      }
    }
    else {
      setBackdropLoading(false);
      setMessageProperty({
        openDialog: true,
        dialogTitle: "Internal Server Error",
        dialogContent: "Please try again later.",
        variant: "error"
      })

      setTimeout(() => {
        setMessageProperty({ openDialog: false });
      }, 3000);
    }
    setBackdropLoading(false);
    // localStorage.setItem("token", "Vicky is good boy");
    // localStorage.setItem("fullName", "Vicky jaiswal");
    // localStorage.setItem("phoneNumber", "6205316232");
    // localStorage.setItem("isDocotrsOrPatiets", true);
    // navigate("/")
  };

  const handleRegistration = async (formData) => {
    setButtonDisabled({ ForRegister: true })
    try {
      setBackdropLoading(true);
      const value = Register;
      value.user_Name = formData.fullName
      value.password = formData.password;
      value.mobileNumber = formData.mobileNumber;
      value.isDocotrsOrPatiets = isDoctor;
      const response = await AuthenticationService.Register(value);
      if (response !== undefined) {
        if (response.requiresVerification === true && response.isSuccess === true) {
          setBackdropLoading(false);
          setOpenRegisterOtpBox(true);
        }else if(response.isSuccess === false){
          setBackdropLoading(false);
          setMessageProperty({
            openDialog: true,
            dialogContent: response.errorMessage,
            variant: "error"
          })

          setTimeout(() => {
            setMessageProperty({ openDialog: false });
          }, 3000);
        }
      }
      else {
        setBackdropLoading(false);
        setMessageProperty({
          openDialog: true,
          dialogTitle: "Internal Server Error",
          dialogContent: "Please try again later.",
          variant: "error"
        })

        setTimeout(() => {
          setMessageProperty({ openDialog: false });
        }, 3000);
      }
      setBackdropLoading(false);

    } catch (error) {
      setMessageProperty({
        openDialog: true,
        dialogTitle: "Internal Server Error",
        dialogContent: "Please try again later.",
        variant: "error"
      })

      setTimeout(() => {
        setMessageProperty({ openDialog: false });
      }, 3000);
    }

    setBackdropLoading(false);

  };

  const handleSubmitOtp = async () => {
    const otp_Data = {
      otp: otp,
      mobileNumber: ""
    }
    if (activeTab === 'register') {
      otp_Data.mobileNumber = inputValues.mobileNumber;
    } else {
      otp_Data.mobileNumber = inputValues.emailOrPhoneNumber;
    }

    console.log(otp_Data);

    try {
      setBackdropLoading(true);
      const response = await AuthenticationService.VerifyOtp(otp_Data);
      console.log(response)
      if (response !== undefined) {
        if (response.isSuccess === true) {
          setOpenLoginOtpBox(false);
          setBackdropLoading(false);
          if(activeTab === 'register'){
            enqueueSnackbar("Verification Success", {variant: "success"})
            setActiveTab('login')
          }else if (activeTab === 'login'){
            enqueueSnackbar("Verification Success", {variant: "success"})
            localStorage.setItem("token", response.token);
            localStorage.setItem("fullName", response.fullName);
            localStorage.setItem("phoneNumber", response.phoneNumber);
            localStorage.setItem("isDocotrsOrPatiets", response.isDocotrsOrPatiets);
            navigate("/")
          }

        } else {
          setBackdropLoading(false);
          setMessageProperty({
            openDialog: true,
            dialogContent: response.errorMessage,
            variant: "error"
          })
          setTimeout(() => {
            setMessageProperty({ openDialog: false });
          }, 3000);
        }
      }

    } catch (error) {
      setMessageProperty({
        openDialog: true,
        dialogContent: "Internal Server Error",
        variant: "error"
      })
      setTimeout(() => {
        setMessageProperty({ openDialog: false });
      }, 3000);
    }

  }

  return (
    <>
      <BackdropLoading open={backdropLoading} />
      <Box sx={{ bgcolor: "#F0F6FF", py: { xs: 2, lg: 8 } }}>

        <Container sx={{ display: "flex", flexDirection: { xs: "column-reverse", lg: "row" } }}>

          {/* Box for left side image */}

          <Box sx={{ bgcolor: "white", width: { xs: "100%", lg: "58%" }, p: { xs: 3, lg: 6 }, borderRadius: "10px", boxShadow: "0 0 5px #64EBB666", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mr: 1, my: { xs: 2, lg: 0 } }}>

            <Box sx={{ height: { xs: "13rem", lg: "18rem" } }}>
              {activeTab === 'login' && (<img src="../../images/LoginVector/Illustration.svg" alt="" height={"100%"} />)}
              {activeTab === 'register' && (<img src="../../images/LoginVector/signupIllustration.svg" alt="" height={"100%"} />)}
            </Box>

            <Typography sx={{ color: "#1C4188", fontSize: { xs: "20px", lg: "28px" }, fontWeight: 700, mt: 3 }}>
              “Join the best”
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography sx={{ color: "#64EBB6CC", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 700, mr: 1 }}>
                “Be the best”
              </Typography>
              <Typography sx={{ color: "#1C4188", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 700, ml: 1 }}>
                “Join us be the best”
              </Typography>
            </Box>

            {activeTab === 'register' && (
              <Box sx={{ height: "4rem", mt: 6 }}>
                <img src="../../images/LoginVector/Shape.svg" alt="" height={"100%"} />
              </Box>
            )}


          </Box>

          {/* Box for right side login */}

          <Box sx={{ bgcolor: "white", width: { xs: "100%", lg: "42%" }, p: { xs: 3, lg: 6 }, borderRadius: "10px", boxShadow: "0 0 5px #64EBB666", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", ml: 1 }}>

            <Box sx={{ display: "flex", width: "100%", alignItems: "start", justifyContent: "center" }}>
              <Box component={"button"} sx={{ backgroundColor: activeTab === 'login' ? "#DBEEFC" : "#42A5F5", width: "100%", textAlign: "center", p: "10px", borderRadius: 2, fontSize: "15px", fontWeight: 500, color: activeTab === 'login' ? "#42A5F5" : "white", border: "2px solid #64EBB6", borderBottomRightRadius: 0, borderTopRightRadius: 0, mr: "1px", }} onClick={() => toggleTab('login')}>
                Login
              </Box>
              <Box component={"button"} sx={{ backgroundColor: activeTab === 'register' ? "#DBEEFC" : "#42A5F5", width: "100%", textAlign: "center", p: "10px", borderRadius: 2, fontSize: "15px", fontWeight: 500, color: activeTab === 'register' ? "#42A5F5" : "white", border: "2px solid #64EBB6", borderBottomLeftRadius: 0, borderTopLeftRadius: 0, ml: "1px" }} onClick={() => toggleTab('register')}>
                Register
              </Box>

            </Box>

            {/* This is login screen */}

            {activeTab === 'login' && (

              <Box sx={{ width: "100%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>

                  {/* Phone number and email input */}
                  <Box sx={{ width: "100%", mt: 3 }} >

                    <InputBox
                      type="text"
                      name="emailOrPhoneNumber"
                      title={"Email or Phone number"}
                      value={inputValues.emailOrPhoneNumber}
                      onChange={handleInputChange}
                    />

                    {errors.emailOrPhoneNumber && (
                      <ErrorMessage message={errors.emailOrPhoneNumber.message} />
                    )}

                  </Box>

                  {/* Password input */}

                  <Box sx={{ width: "100%", mt: 2 }} >
                    <InputBox
                      name="loginPassword"
                      type="text"
                      title={"Password"}
                      value={inputValues.loginPassword}
                      onChange={handleInputChange}
                    />
                    {errors.loginPassword && (
                      <ErrorMessage message={errors.loginPassword.message} />
                    )}
                  </Box>

                  {/* Button for login */}
                  <Box sx={{ width: "100%", mt: 2 }}>
                    <CustomizedButton title={"Sign In"} type={"submit"} disabled={buttonDisabled.ForLogin} />
                  </Box>

                </form>

                <OtpVerificationDialogBox openDialog={openLoginOtpBox} closeDialog={() => setOpenLoginOtpBox(false)} handleSubmitOtp={handleSubmitOtp} setOtpMain={setOtp} />


              </Box>
            )}

            {/* This is for signup screen */}

            {activeTab === 'register' && (
              <Box sx={{ width: "100%" }}>

                <form onSubmit={handleSubmit(onSubmit)}>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    {!isDoctor && (<Typography sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600, mr: 1, }}>Are You a Doctor ?</Typography>)}

                    <Typography component={"button"} type='button' sx={{ color: "#42A5F5", fontSize: "16px", fontWeight: 600, border: "none", bgcolor: "transparent" }} onClick={toggleDoctorStatus}>{isDoctor ? "Not a Doctor ?" : "Register Here"}</Typography>


                  </Box>

                  {/* Input box for full name */}

                  <Box sx={{ width: "100%", mt: 2 }} >
                    <InputBox
                      type="text"
                      title={"Full Name"}
                      name="fullName"
                      value={inputValues.fullName}
                      onChange={handleInputChange}
                    />
                    {errors.fullName && (
                      <ErrorMessage message={errors.fullName.message} />
                    )}
                  </Box>

                  {/* Input box for phone number */}

                  <Box sx={{ width: "100%", mt: 2 }} >
                    <InputBox
                      type="text"
                      title="Phone Number"
                      name="mobileNumber"
                      value={inputValues.mobileNumber}
                      onChange={handleInputChange}
                    />
                    {errors.mobileNumber && (
                      <ErrorMessage message={errors.mobileNumber.message} />
                    )}
                  </Box>

                  {/* Input box for password */}

                  <Box sx={{ width: "100%", mt: 2 }} >
                    <InputBox
                      type="text"
                      title="Password"
                      name="password"
                      value={inputValues.password}
                      onChange={handleInputChange}
                    />

                    {errors.password && (
                      <ErrorMessage message={errors.password.message} />
                    )}
                  </Box>

                  {/* Button for signup */}

                  <Box sx={{ width: "100%", mt: 2 }}>
                    <CustomizedButton title={"Sign Up"} type={"submit"} disabled={buttonDisabled.ForRegister} />
                  </Box>

                </form>

                <OtpVerificationDialogBox openDialog={openRegisterOtpBox} closeDialog={() => setOpenRegisterOtpBox(false)} handleSubmitOtp={handleSubmitOtp} setOtpMain={setOtp} />

              </Box>
            )}

            {/* Google and facebook signin */}

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "16px", color: "#1C4188", textAlign: "center" }}>Or</Typography>

              <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
                <Box component={"button"} sx={{ padding: ".8rem", backgroundColor: "#F0F6FF", borderRadius: "100px", height: "50px", cursor: "pointer", border: "none", mr: 1 }}>
                  <img src="../../images/SocialMedia/google.svg" style={{ height: "100%" }} alt="" />
                </Box>
                <Box component={"button"} sx={{ padding: ".8rem", backgroundColor: "#42A5F5", borderRadius: "100px", height: "50px", cursor: "pointer", border: "none", ml: 1 }} >
                  <img src="../../images/SocialMedia/facebook.svg" style={{ height: "100%" }} alt="" />
                </Box>

              </Box>

            </Box>

          </Box>

        </Container>

        <MessageBar openDialog={messageProperty.openDialog} closeDialog={() => setMessageProperty({ openDialog: false })} title={messageProperty.dialogTitle} content={messageProperty.dialogContent} variant={messageProperty.variant} />

      </Box>

      <MobileAppBanner />
      <LiveCounter />
      <Footer />
    </>
  )
}

export default Login;
