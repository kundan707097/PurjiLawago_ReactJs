import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import LoginService from "../../services/Login.services";
import RegisterService from "../../services/register.service";
import { Register, LoginValue } from "../../models/Index";
import { Box, Container, Typography } from '@mui/material';
import InputBox from '../../components/InputBox';
import { CustomizedButton } from '../../components/Button';
import MobileAppBanner from '../../components/MobileAppBanner';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [isDoctor, setIsDoctor] = useState(false);
  const [inputValues, setInputValues] = useState({
    fullName: '',
    mobileNumber: '',
    emailOrPhoneNumber: '',
    loginPassword: '',
    password: '',
  });
  const navigate = useNavigate();

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
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setValue(name, value, { shouldValidate: true });
    console.log(e.target.id)
  };


  const onSubmit = async (data) => {
    debugger
    if (activeTab === "register") {
      handleRegistration(data);
    } else {
      handleLogin(data);
    }
  };

  const handleLogin = async (loginData) => {
    let value = LoginValue;
    debugger;
    value.emailOrPhoneNumber = loginData.emailOrPhoneNumber;
    value.password = loginData.loginPassword;
    const response = await LoginService.Login(value);
    debugger;
    if (response !== undefined) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("fullName", response.fullName);
      localStorage.setItem("phoneNumber", response.phoneNumber);
      // localStorage.setItem("isDoctor", response.isDoctor);
      navigate("/")
    }
    else {
      throw Error("Network response was not ok");
    }
  };
  const handleRegistration = async (formData) => {
    try {
      const value = Register;
      value.user_Name = formData.fullName
      value.password = formData.password;
      value.mobileNumber = formData.mobileNumber;
      value.isDocotrsOrPatiets = isDoctor;
      let response = await RegisterService.register(value);
      if (response !== true) {
        throw Error("Network response was not ok");
      }
      else {
        setActiveTab("login");
        setValue('registeredemail', formData.email, { shouldValidate: true });
        setValue('registeredpassword', formData.password, { shouldValidate: true });
      }

    }
    catch (ex) {
    }

  };
  const toggleDoctorStatus = () => {
    setIsDoctor(!isDoctor);
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="/images/doctorImage.png"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-4 col-xl-4 offset-xl-1">
            <div>
              {/* Pills navs */}
              <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                    id="tab-login"
                    data-mdb-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected={activeTab === 'login'}
                    onClick={() => toggleTab('login')}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                    id="tab-register"
                    data-mdb-toggle="pill"
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected={activeTab === 'register'}
                    onClick={() => toggleTab('register')}
                  >
                    Register
                  </a>
                </li>
              </ul>
              {/* Pills navs */}


              {/* login form */}


              {/* Pills content */}
              <div className="tab-content">
                <div
                  className={`tab-pane fade show ${activeTab === 'login' ? 'active' : ''}`}
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center mb-3">
                      <p>Sign in with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>

                    <p className="text-center">or:</p>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="emailOrPhoneNumber">
                        Email or Phone Number
                      </label>
                      <input
                        type="text"
                        id="emailOrPhoneNumber"
                        value={inputValues.emailOrPhoneNumber}
                        className={`form-control ${errors.emailOrPhoneNumber ? 'is-invalid' : ''}`}
                        {...register('emailOrPhoneNumber')}
                        onChange={handleInputChange}
                      />
                      {errors.emailOrPhoneNumber && (
                        <div className="invalid-feedback">{errors.emailOrPhoneNumber.message}</div>
                      )}
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="loginPassword">
                        Password
                      </label>
                      <input
                        type="password"
                        id="loginPassword"
                        value={inputValues.loginPassword}
                        className={`form-control ${errors.loginPassword ? 'is-invalid' : ''}`}
                        {...register('loginPassword')}
                        onChange={handleInputChange}
                      />
                      {errors.loginPassword && (
                        <div className="invalid-feedback">{errors.loginPassword.message}</div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-3">
                      Log In
                    </button>
                  </form>
                </div>

                <div
                  className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <p>{isDoctor ? "" : "Are You a Doctor?"}<a href="#" onClick={toggleDoctorStatus}>{isDoctor ? "Not a Doctor ?" : "Register Here"}</a></p>
                      <label className="form-label" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={inputValues.fullName}
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        {...register('fullName')}
                        onChange={handleInputChange}
                      />
                      {errors.fullName && (
                        <div className="invalid-feedback">{errors.fullName.message}</div>
                      )}
                    </div>


                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="registermobileNumber">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="registermobileNumber"
                        value={inputValues.mobileNumber}
                        className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                        {...register('mobileNumber')}
                        onChange={handleInputChange}
                      />
                      {errors.mobileNumber && (
                        <div className="invalid-feedback">{errors.mobileNumber.message}</div>
                      )}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="registerPassword">
                        Password
                      </label>
                      <input
                        type="password"
                        id="registerPassword"
                        value={inputValues.password}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        {...register('password')}
                        onChange={handleInputChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password.message}</div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-3">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Login = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [isDoctor, setIsDoctor] = useState(false);
  const [inputValues, setInputValues] = useState({
    fullName: '',
    mobileNumber: '',
    emailOrPhoneNumber: '',
    loginPassword: '',
    password: '',
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
      handleLogin(data);
    }
  };

  const handleLogin = async (loginData) => {
    let value = LoginValue;
    // debugger;
    value.emailOrPhoneNumber = loginData.emailOrPhoneNumber;
    value.password = loginData.loginPassword;
     const response = await LoginService.Login(value);
     if (response !== undefined) {
       localStorage.setItem("token", response.token);
       localStorage.setItem("fullName", response.fullName);
       localStorage.setItem("phoneNumber", response.phoneNumber);
       localStorage.setItem("isDocotrsOrPatiets", response.isDocotrsOrPatiets);
       localStorage.setItem("id", response.loginId)
       navigate("/")
     }
     else {
       throw Error("Network response was not ok");
     }
    // localStorage.setItem("token", "Vicky is good boy");
    // localStorage.setItem("fullName", "Vicky jaiswal");
    // localStorage.setItem("phoneNumber", "6205316232");
    // localStorage.setItem("isDocotrsOrPatiets", true);
    // navigate("/")
  };
  const handleRegistration = async (formData) => {
    try {
      const value = Register;
      value.user_Name = formData.fullName
      value.password = formData.password;
      value.mobileNumber = formData.mobileNumber;
      value.isDocotrsOrPatiets = isDoctor;
      let response = await RegisterService.register(value);
      if (response !== true) {
        throw Error("Network response was not ok");
      }
      else {
        setActiveTab("login");
        setValue('registeredemail', formData.email, { shouldValidate: true });
        setValue('registeredpassword', formData.password, { shouldValidate: true });
      }

    }
    catch (ex) {
    }

  };
  const toggleDoctorStatus = () => {
    setIsDoctor(!isDoctor);
  }

  return (
    <>
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
                    <CustomizedButton title={"Sign In"} type={"submit"} />
                  </Box>

                </form>

              </Box>
            )}

            {/* This is for signup screen */}

            {activeTab === 'register' && (
              <Box sx={{ width: "100%" }}>

                <form onSubmit={handleSubmit(onSubmit)}>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    {!isDoctor && (<Typography sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600, mr: 1, }}>Are You a Doctor ?</Typography>)}

                    <Typography component={"button"} type='button' sx={{ color: "#42A5F5", fontSize: "16px", fontWeight: 600,  border:"none", bgcolor:"transparent" }} onClick={toggleDoctorStatus}>{isDoctor ? "Not a Doctor ?" : "Register Here"}</Typography>


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
                    <CustomizedButton title={"Sign Up"} type={"submit"} />
                  </Box>

                </form>
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

      </Box>

      <MobileAppBanner />
      <LiveCounter />
      <Footer />
    </>
  )
}

export default Login;
