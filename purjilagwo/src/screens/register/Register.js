import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import "./register.css";
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';
import MessageBar from '../../components/MessageBar';
import BackdropLoading from '../../components/BackdropLoading';
import { OtpVerificationDialogBox } from '../../components/DialogBox';
import { useSnackbar } from 'notistack';
import LoginIcon from '@mui/icons-material/Login';
const RegisterScreen = () => {
  const [loginType, setLoginType] = useState("email");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [activeTab, setActiveTab] = useState('login');
  const [isDoctor, setIsDoctor] = useState(false);
  const [inputValues, setInputValues] = useState({
    fullName: '',
    mobileNumber: '',
    emailOrPhoneNumber: '',
    loginPassword: '',
    password: '',
    newPassword: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState({
    ForLogin: false,
    ForRegister: false,

  });
  const [backdropLoading, setBackdropLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [openLoginOtpBox, setOpenLoginOtpBox] = useState({
    open: false,
    endpoint: "",
    title: "",
    content: ""
  });
  const [openRegisterOtpBox, setOpenRegisterOtpBox] = useState({
    open: false,
    endpoint: "",
    title: "",
    content: ""
  });
  const [messageProperty, setMessageProperty] = useState({
    openDialog: false,
    dialogTitle: "",
    dialogContent: "",
    variant: "",
  });
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false); // this usestate is for switching between login with password and forgot password
  const [newPasswordInput, setNewPasswordInput] = useState(false);

  const validationSchema = (activeTab = 'login') => {
    return yup.object().shape({
      emailOrPhoneNumber: activeTab === 'login'
        ? yup.string().required('Email or Phone Number is required')
        : yup.string(),
      loginPassword: activeTab === 'login' && !loginWithOtp && !forgotPassword
        ? yup.string().required('Password is required')
        : yup.string(),
      newPassword: activeTab === 'login' && newPasswordInput
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

  const { handleSubmit, formState: { errors }, setValue } = useForm({
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

  const onSubmit = async (data) => {
    console.log(data);
    // debugger
    if (activeTab === "register") {
      handleRegistration(data);
    } else {
      if (loginWithOtp) {
        console.log("login with otp")
        handleLoginViaOtp(data);
      } else if (forgotPassword && !newPasswordInput) {
        console.log("handle forgot password")
        handleforgotPassord(data);
      } else if (newPasswordInput) {
        console.log("login with new password")
        handleLoginWithNewPassword(data);
      }
      else {
        handleLogin(data);
      }
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
    if (response !== undefined) {
      if (response.requiresVerification === true && response.isSuccess === false) {
        // this means we need to verify the user
        setOpenLoginOtpBox({ open: true, endpoint: "/Registration/OTPVerification", title: "Verify your account", content: "We have sent your a verification code to your email or phone number. Please enter the code to verify your account." });
      } else if (response.requiresVerification === false && response.isSuccess === true) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("fullName", response.fullName);
        localStorage.setItem("phoneNumber", response.phoneNumber);
        localStorage.setItem("isDocotrsOrPatiets", response.isDocotrsOrPatiets);
        localStorage.setItem("role", response.role);
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
          setOpenRegisterOtpBox({ open: true, endpoint: "/Registration/OTPVerification", title: "Verify your account", content: "We have sent your a verification code to your phone number. Please enter the code to verify your account." });
        } else if (response.isSuccess === false) {
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

  const handleSubmitOtp = async (endpoint) => {
    const otp_Data = {
      otp: otp,
      mobileNumber: ""
    }
    if (activeTab === 'register') {
      otp_Data.mobileNumber = inputValues.mobileNumber;
    } else {
      otp_Data.mobileNumber = inputValues.emailOrPhoneNumber;
    }

    console.log(otp_Data, endpoint);

    try {
      setBackdropLoading(true);
      const response = await AuthenticationService.VerifyOtp(otp_Data, endpoint);
      debugger;
      if (response.status === 200) {
        if (response.data.isSuccess === true) {
          setOpenLoginOtpBox({ open: false, endpoint: "" });
          setBackdropLoading(false);
          if (activeTab === 'register') {
            enqueueSnackbar("Verification Success", { variant: "success" })
            setActiveTab('login')
          } else if (activeTab === 'login') {
            if (forgotPassword) {
              setNewPasswordInput(true);
            } else {
              enqueueSnackbar("Verification Success", { variant: "success" })
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("fullName", response.data.fullName);
              localStorage.setItem("phoneNumber", response.data.phoneNumber);
              localStorage.setItem("isDocotrsOrPatiets", response.data.isDocotrsOrPatiets);
              localStorage.setItem("role", response.role);
              navigate("/")
            }
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
      } else {
        setBackdropLoading(false);
        setMessageProperty({
          openDialog: true,
          dialogTitle: "Error",
          dialogContent: "Server is busy",
          variant: "error"
        })

        setTimeout(() => {
          setMessageProperty({ openDialog: false });
        }, 3000);

      }

    } catch (error) {
      setBackdropLoading(false);
      enqueueSnackbar("Internal Server Error", { variant: "error" })
    }

  }

  const handleLoginViaOtp = async (formData) => {
    try {
      setButtonDisabled({ ForLogin: true })
      setBackdropLoading(true);
      const response = await AuthenticationService.LoginViaOtp(formData.emailOrPhoneNumber);
      if (response.status === 200) {
        setBackdropLoading(false);
        if (response.data.isSuccess === true) {
          setOpenLoginOtpBox({ open: true, endpoint: "Registration/Login-with-otp-token", title: "Login Via Otp", content: "We have sent your a verification code to your register phone number. Please enter the code to login your account." });
        } else {
          setMessageProperty({
            openDialog: true,
            dialogTitle: "Error",
            dialogContent: response.data.errorMessage,
            variant: "error"
          })

          setTimeout(() => {
            setMessageProperty({ openDialog: false });
          }, 3000);
        }
      } else {
        setBackdropLoading(false);
        setMessageProperty({
          openDialog: true,
          dialogTitle: "Error",
          dialogContent: "Server is busy",
          variant: "error"
        })

        setTimeout(() => {
          setMessageProperty({ openDialog: false });
        }, 3000);

      }
    } catch (error) {
      setBackdropLoading(false);
      enqueueSnackbar("Internal Server Error", { variant: "error" })
    }
  }

  const handleforgotPassord = async (formData) => {
    try {
      setBackdropLoading(true);
      const response = await AuthenticationService.ForgotPassword(formData.emailOrPhoneNumber);
      if (response.status === 200) {
        setBackdropLoading(false);
        if (response.data.isSuccess === true) {
          setOpenLoginOtpBox({ open: true, endpoint: "Registration/ForgotPassword-MobileNumberOTP", title: "Forgot Password Otp", content: "We have sent your a verification code to your register phone number. Please enter the code to reset your password." });
        } else {
          setMessageProperty({
            openDialog: true,
            dialogTitle: "Error",
            dialogContent: response.data.errorMessage,
            variant: "error"
          })

          setTimeout(() => {
            setMessageProperty({ openDialog: false });
          }, 3000);
        }
      } else {
        setBackdropLoading(false);
        setMessageProperty({
          openDialog: true,
          dialogTitle: "Error",
          dialogContent: "Server is busy",
          variant: "error"
        })

        setTimeout(() => {
          setMessageProperty({ openDialog: false });
        }, 3000);
      }
    } catch (error) {
      setBackdropLoading(false);
      enqueueSnackbar("Internal Server Error", { variant: "error" })
    }
  }

  const handleLoginWithNewPassword = async (formData) => {
    try {
      setButtonDisabled({ ForLogin: true });
      setBackdropLoading(true);
      const login_data = {
        mobileNumber: formData.emailOrPhoneNumber,
        newPassword: formData.newPassword
      }
      const response = await AuthenticationService.LoginWithNewPassword(login_data);
      if (response.status === 200) {
        setBackdropLoading(false);
        if (response.data.isSuccess === true) {
          // localStorage.setItem("token", response.token);
          // localStorage.setItem("fullName", response.fullName);
          // localStorage.setItem("phoneNumber", response.phoneNumber);
          // localStorage.setItem("isDocotrsOrPatiets", response.isDocotrsOrPatiets);
          // navigate("/")
          enqueueSnackbar("Password changed successfully", { variant: "success" })
        } else {
          setMessageProperty({
            openDialog: true,
            dialogTitle: "Error",
            dialogContent: response.data.errorMessage,
            variant: "error"
          })

          setTimeout(() => {
            setMessageProperty({ openDialog: false });
          }, 3000);
        }
      } else {
        setBackdropLoading(false);
        setMessageProperty({
          openDialog: true,
          dialogTitle: "Error",
          dialogContent: "Server is busy",
          variant: "error"
        })

        setTimeout(() => {
          setMessageProperty({ openDialog: false });
        }, 3000);
      }
    } catch (error) {
      setBackdropLoading(false);
      enqueueSnackbar("Internal Server Error", { variant: "error" })
    }
  }

  const toggleDoctorStatus = () => {
    setIsDoctor(!isDoctor);
  }

  const loginViaOtpToggler = () => {
    setLoginWithOtp(!loginWithOtp);
  }

  const forgotPasswordToggler = () => {
    setForgotPassword(!forgotPassword);
    setNewPasswordInput(false);
  }

  return (
    <>
      <BackdropLoading open={backdropLoading} />
      <div className='login__background'>
        <div className='login__div'>
          <div className='login__icon'>
            <LoginIcon sx={{ fontSize: "40px", color: "#000", fontWeight: "700" }} />
          </div>
          <h3>Sign Up</h3>
          <h5>Join us for the best healthcare services.</h5>
          <form>
            {
              loginType === "email" && (
                <>

                  <label>Email</label>
                  <input placeholder='Enter Your Email' />
                  <label>Password</label>
                  <input type='password' placeholder='Enter Your Password' />
                  <div className='d-flex justify-content-between align-items-center'>
                    <p onClick={()=>setLoginType("otp")}>Signin using OTP</p>
                    <p>Forget Password?</p>
                  </div>
                  <div className='d-flex justify-content-center align-items-center mt-2'>
                    <button>Sign In</button>
                  </div>
                  <div className='mt-1'>
                    Already Have an Account?
                    <Link to="/login">Sign In</Link>
                  </div>
                </>
              )
            }
            {
              loginType === "otp" && (
                <>
                  <label>Enter Phone Number</label>
                  <input type='number' placeholder='Enter Your Phone Number' />
                  <div className='d-flex justify-content-between align-items-center'>
                    <p onClick={()=>setLoginType("email")}>Signup using Password</p>
                    {/* <p>Forget Password?</p> */}
                  </div>
                  <div className='d-flex justify-content-center align-items-center mt-2'>
                    <button>Sign In</button>
                  </div>
                  <div className='mt-1'>
                    Already Have an Account?
                    <Link to="/login">Sign In</Link>
                  </div>
                </>
              )
            }

          </form>
        </div>
      </div>
      {/* <MobileAppBanner /> */}
      {/* <LiveCounter /> */}
      <Footer />
    </>
  )
}

export default RegisterScreen;
