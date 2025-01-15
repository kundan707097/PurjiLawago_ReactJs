/* global grecaptcha */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import LoginIcon from "@mui/icons-material/Login";
import { auth } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import BackdropLoading from "../../components/BackdropLoading";
import Footer from "../../components/Footer";

const LoginScreen = () => {
  const [loginType, setLoginType] = useState("email"); // "email" or "otp"
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    otp: "",
  });
  const [backdropLoading, setBackdropLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  // Recaptcha Setup
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha solved:", response);
          },
          "expired-callback": () => {
            console.log("Recaptcha expired. Try again.");
          },
        },
        auth
      );
    }
  };

  // Email Login Handler
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setBackdropLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      );
      const user = userCredential.user;
  
      // Retrieve the token
      const token = await user.getIdToken();
  
      // Store token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.displayName || "User");
      localStorage.setItem("email", user.email);
  
      enqueueSnackbar("Login successful!", { variant: "success" });
      navigate("/"); // Navigate to the home screen
    } catch (error) {
      console.error("Error during email login:", error.message);
      enqueueSnackbar("Invalid email or password.", { variant: "error" });
    } finally {
      setBackdropLoading(false);
    }
  };  

  // Send OTP Handler
  const handleSendOtp = async () => {
    if (!inputValues.phoneNumber) {
      enqueueSnackbar("Phone number is required.", { variant: "error" });
      return;
    }

    setupRecaptcha();
    const phoneNumber = `+${inputValues.phoneNumber.trim()}`;
    const appVerifier = window.recaptchaVerifier;

    setBackdropLoading(true);
    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      enqueueSnackbar("OTP sent successfully!", { variant: "success" });
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.render().then((widgetId) => {
          if (typeof grecaptcha !== "undefined") grecaptcha.reset(widgetId);
        });
      }
      enqueueSnackbar("Failed to send OTP. Please try again.", { variant: "error" });
    } finally {
      setBackdropLoading(false);
    }
  };

  // OTP Verification Handler
  const handleVerifyOtp = async () => {
    if (!confirmationResult) {
      enqueueSnackbar("No OTP request found. Please request OTP again.", { variant: "error" });
      return;
    }
  
    if (!inputValues.otp) {
      enqueueSnackbar("Please enter the OTP.", { variant: "error" });
      return;
    }
  
    setBackdropLoading(true);
    try {
      const result = await confirmationResult.confirm(inputValues.otp.trim());
      const user = result.user;
  
      // Retrieve the token
      const token = await user.getIdToken();
  
      // Store token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.displayName || "User");
      localStorage.setItem("phoneNumber", user.phoneNumber);
  
      enqueueSnackbar("Login successful!", { variant: "success" });
      navigate("/"); // Navigate to the home screen
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
      enqueueSnackbar("Invalid OTP. Please try again.", { variant: "error" });
    } finally {
      setBackdropLoading(false);
    }
  };
  

  return (
    <>
      <BackdropLoading open={backdropLoading} />
      <div className="login__background">
        <div className="login__div">
          <div className="login__icon">
            <LoginIcon sx={{ fontSize: "40px", color: "#000", fontWeight: "700" }} />
          </div>
          <h3>Welcome Back!</h3>
          <h5>Sign In using Email or Using Phone Number</h5>
          <form onSubmit={loginType === "email" ? handleEmailLogin : handleVerifyOtp}>
            {loginType === "email" && (
              <>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={inputValues.email}
                  onChange={handleInputChange}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={inputValues.password}
                  onChange={handleInputChange}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <p onClick={() => setLoginType("otp")}>Sign in using OTP</p>
                  <p>Forgot Password?</p>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <button type="submit">Sign In</button>
                </div>
                <div className="mt-1">
                  Want to Register? <Link to="/signup">Sign Up</Link>
                </div>
              </>
            )}
            {loginType === "otp" && (
              <>
                <label>Enter Phone Number</label>
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number"
                  value={inputValues.phoneNumber}
                  onChange={handleInputChange}
                />
                {otpSent && (
                  <>
                    <label>Enter OTP</label>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={inputValues.otp}
                      onChange={handleInputChange}
                    />
                  </>
                )}
                <div id="recaptcha-container"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <p onClick={() => setLoginType("email")}>Sign in using Password</p>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  {!otpSent ? (
                    <button type="button" onClick={handleSendOtp}>
                      Send OTP
                    </button>
                  ) : (
                    <button type="submit">Verify OTP</button>
                  )}
                </div>
                <div className="mt-1">
                  Want to Register? <Link to="/signup">Sign Up</Link>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginScreen;
