import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom"
import * as yup from "yup";
import LoginService from "../../services/Login.services";
import RegisterService from "../../services/register.service";
import { Register, LoginValue } from "../../models/Index";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isDoctor, setIsDoctor] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);
  const [inputValues, setInputValues] = useState({
    mobileNumber: '',
    first_Name: '',
    last_Name: '',
    email: '',
    registeredemail: '',
    password: '',
    registeredpassword: '',
    confirmPassword: '',
  });
  const navigate = useNavigate(); 

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const toggleDoctorStatus = () => {
    setIsDoctor(!isDoctor);
  };

  const validationSchema = (activeTab = "login") => {
    return yup.object().shape({
      mobileNumber: activeTab === "register"
        ? yup.string().matches(/[0-9]{10}/, "Invalid mobile number").required("Mobile number is required")
        : yup.string(),
      first_Name: activeTab === "register"
        ? yup.string().required("First Name is required")
        : yup.string(),
      last_Name: activeTab === "register"
        ? yup.string().required("Last Name is required")
        : yup.string(),
      registeredemail: activeTab === "login"
        ? yup.string().email("Invalid email").required("Email is required") : yup.string(),
      email: activeTab === "register"
        ? yup.string().email("Invalid email").required("Email is required") : yup.string(),
      password: activeTab === "register"
        ? yup.string().required("Password is required")
        : yup.string(),
      registeredpassword: activeTab === "login"
        ? yup.string().required("Password is required")
        : yup.string(),
      confirmPassword: activeTab === "register"
        ? yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required")
        : yup.string(),
    });
  };

  const validationResolver = yupResolver(validationSchema(activeTab));

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: validationResolver
  });


  const onSubmit = async (data) => {
    if (activeTab === "register") {
      handleRegistration(data);
    } else {
      handleLogin(data);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value, { shouldValidate: true });
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRegistration = async (formData) => {
    try {
      const value = Object.keys(Register).reduce((result, key) => {
        result[key] = formData[key];
        return result;
      }, {});
      let response = await RegisterService.register(value);
      if (response !== true) {
        throw Error("Network response was not ok");
      }
      else {
        setRegistrationSuccess(true);
        setRegistrationError(null);
        setActiveTab("login");
        setValue('registeredemail', formData.email, { shouldValidate: true });
        setValue('registeredpassword', formData.password, { shouldValidate: true });
      }

    }
    catch (ex) {
      setRegistrationError("Registration Error: " + ex.message);
      setRegistrationSuccess(false);
    }

  };

  const handleLogin = async (loginData) => {
    let value =  LoginValue;
    value.email = loginData.registeredemail;
    value.password = loginData.registeredpassword;
    const response = await LoginService.Login(value);
    if(response!==undefined){
    localStorage.setItem("token", response);
    navigate("/homeDashhboard")
    }
    else{
      throw Error("Network response was not ok");
    }
  };

  return (
    <div className="login-form">
      <ul className="nav nav-pills nav-justified" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => toggleTab("login")}
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => toggleTab("register")}
          >
            Register
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        <div
          className={`tab-pane fade ${activeTab === "login" ? "show active" : ""}`}
          id="pills-login"
          role="tabpanel"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
              <input
                type="email"
                id="registeredemail"
                name="email"
                value={inputValues.registeredemail}
                className={`form-control ${errors.registeredemail ? "is-invalid" : ""}`}
                {...register("registeredemail")}
                onChange={handleInputChange}

              />
              {errors.registeredemail && (
                <div className="invalid-feedback">{errors.registeredemail.message}</div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="registeredpassword"
                className={`form-control ${errors.registeredpassword ? "is-invalid" : ""}`}
                value={inputValues.registeredpassword}
                {...register("registeredpassword")}
                disabled={activeTab === "register"}
                onChange={handleInputChange}

              />
              {errors.registeredpassword && (
                <div className="invalid-feedback">{errors.registeredpassword.message}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </form>
        </div>

        <div
          className={`tab-pane fade ${activeTab === "register" ? "show active" : ""
            }`}
          id="pills-register"
          role="tabpanel"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-outline mb-4">
              <p>{isDoctor ? "Are You a Doctor?" : ""}<a href="#" onClick={toggleDoctorStatus}>{isDoctor ? "Register Here" : "Not a Doctor ?"}</a></p>
              <label className="form-label" htmlFor="registerFirstName">
                First Name
              </label>
              <input
                type="text"
                id="registerFirstName"
                name="first_Name"
                className={`form-control ${errors.first_Name ? "is-invalid" : ""}`}
                {...register("first_Name")}
                value={inputValues.first_Name}
                onChange={handleInputChange}

              />
              {errors.first_Name && (
                <div className="invalid-feedback">{errors.first_Name.message}</div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerLastName">
                Last Name
              </label>
              <input
                type="text"
                id="registerLastName"
                name="last_Name"
                className={`form-control ${errors.last_Name ? "is-invalid" : ""}`}
                {...register("last_Name")}
                value={inputValues.last_Name}
                onChange={handleInputChange}

              />
              {errors.last_Name && (
                <div className="invalid-feedback">{errors.last_Name.message}</div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
              <input
                type="email"
                id="registerEmail"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={inputValues.email}
                {...register("email")}
                onChange={handleInputChange}

              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerMobile">
                Mobile Number
              </label>
              <input
                type="text"
                id="registerMobile"
                name="mobileNumber"
                className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
                {...register("mobileNumber")}
                value={inputValues.mobileNumber}
                pattern="[0-9]{10}"
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
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={inputValues.password}
                {...register("password")}
                onChange={handleInputChange}

              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
              <input
                type="password"
                id="registerRepeatPassword"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                value={inputValues.confirmPassword}
                {...register("confirmPassword")}
                onChange={handleInputChange}

              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword.message}</div>
              )}
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"

              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Send OTP
            </button>
            {registrationSuccess && (
              <div className="alert alert-success" role="alert">
                Registration is successful! Please log in.
              </div>
            )}
            {registrationError && (
              <div className="alert alert-danger" role="alert">
                {registrationError}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
