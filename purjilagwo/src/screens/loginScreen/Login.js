import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {useNavigate} from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import LoginService from "../../services/Login.services";
import RegisterService from "../../services/register.service";
import { Register, LoginValue } from "../../models/Index";

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
    let value =  LoginValue;
    debugger;
    value.emailOrPhoneNumber = loginData.emailOrPhoneNumber;
    value.password = loginData.loginPassword;
    const response = await LoginService.Login(value);
    if(response!==undefined){
    localStorage.setItem("token", response.token);
    localStorage.setItem("fullName", response.fullName);
    localStorage.setItem("phoneNumber", response.phoneNumber);
    navigate("/")
    }
    else{
      throw Error("Network response was not ok");
    }
  };
  const handleRegistration = async (formData) => {
    try {
      const value = Register;
      value.user_Name=formData.fullName
      value.password=formData.password;
      value.mobileNumber=formData.mobileNumber;
      value.isDocotrsOrPatiets=isDoctor;
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
                    <p>{isDoctor ?  "" :"Are You a Doctor?" }<a href="#" onClick={toggleDoctorStatus}>{isDoctor ?  "Not a Doctor ?" :"Register Here"}</a></p>
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

export default LoginForm;
