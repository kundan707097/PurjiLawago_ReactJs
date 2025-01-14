/* global grecaptcha */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import LoginIcon from '@mui/icons-material/Login';
import { auth } from '../../services/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import './register.css';
import BackdropLoading from '../../components/BackdropLoading';
import Footer from '../../components/Footer';

const RegisterScreen = () => {
  const [loginType, setLoginType] = useState('email');
  const [activeTab, setActiveTab] = useState('login');
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    otp: '',
  });
  const [backdropLoading, setBackdropLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = yup.object().shape({
    email:
      loginType === 'email'
        ? yup.string().email('Invalid email').required('Email is required')
        : yup.string(),
    password:
      loginType === 'email'
        ? yup.string().required('Password is required')
        : yup.string(),
    otp:
      loginType === 'otp' && otpSent
        ? yup.string().required('OTP is required')
        : yup.string(),
  });

  const { handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
    setValue(name, value, { shouldValidate: true });
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA solved:', response);
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired. Please try again.');
        },
      });

      window.recaptchaVerifier.render().then((widgetId) => {
        console.log('reCAPTCHA rendered with widget ID:', widgetId);
      });
    }
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    const phoneNumber = `+${inputValues.phoneNumber.trim()}`;
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      enqueueSnackbar('OTP sent successfully!', { variant: 'success' });
    } catch (error) {
      console.error('Error sending OTP:', error);
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.render().then((widgetId) => {
          if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset(widgetId);
          }
        });
      }
      enqueueSnackbar('Failed to send OTP. Please try again.', { variant: 'error' });
    }
  };

  const handleVerifyOtp = async () => {
    if (!confirmationResult) {
      enqueueSnackbar('No OTP request found. Please request OTP again.', { variant: 'error' });
      return;
    }

    const code = inputValues.otp.trim();
    if (!code) {
      enqueueSnackbar('Please enter the OTP.', { variant: 'error' });
      return;
    }

    try {
      const result = await confirmationResult.confirm(code);
      const user = result.user;
      enqueueSnackbar('Login successful!', { variant: 'success' });
      console.log('User signed in:', user);
      navigate('/');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      enqueueSnackbar('Invalid OTP or verification failed. Please try again.', { variant: 'error' });
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password);
      enqueueSnackbar('Signup successful!', { variant: 'success' });
      navigate('/');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault(); // Prevent form default redirection behavior
    try {
      await signInWithEmailAndPassword(auth, inputValues.email, inputValues.password);
      enqueueSnackbar('Login successful!', { variant: 'success' });
      navigate('/'); // Redirect to the home page
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <BackdropLoading open={backdropLoading} />
      <div className='login__background'>
        <div className='login__div'>
          <div className='login__icon'>
            <LoginIcon sx={{ fontSize: '40px', color: '#000', fontWeight: '700' }} />
          </div>
          <h3>Sign Up</h3>
          <form
            onSubmit={activeTab === 'login' 
              ? handleEmailSignup 
              : loginType === 'email' 
              ? handleEmailLogin 
              : handleVerifyOtp}
          >
            {loginType === 'email' ? (
              <>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Your Email'
                  value={inputValues.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className='error'>{errors.email.message}</p>}
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Your Password'
                  value={inputValues.password}
                  onChange={handleInputChange}
                />
                {errors.password && <p className='error'>{errors.password.message}</p>}
                <div className='d-flex justify-content-between align-items-center'>
                  <p onClick={() => setLoginType('otp')}>Sign in using OTP</p>
                  <p>Forgot Password?</p>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-2'>
                  <button type='submit'>{activeTab === 'signup' ? 'Sign Up' : 'Sign In'}</button>
                </div>
              </>
            ) : (
              <>
                <label>Phone Number</label>
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Enter Your Phone Number'
                  value={inputValues.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <p className='error'>{errors.phoneNumber.message}</p>}
                {otpSent && (
                  <>
                    <label>OTP</label>
                    <input
                      type='text'
                      name='otp'
                      placeholder='Enter OTP'
                      value={inputValues.otp}
                      onChange={handleInputChange}
                    />
                    {errors.otp && <p className='error'>{errors.otp.message}</p>}
                  </>
                )}
                <div id='recaptcha-container'></div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p onClick={() => setLoginType('email')}>Sign in using Email</p>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-2'>
                  {!otpSent ? (
                    <button type='button' onClick={handleSendOtp}>
                      Send OTP
                    </button>
                  ) : (
                    <button type='submit'>Verify OTP</button>
                  )}
                </div>
              </>
            )}
             <div className='mt-1'>
                    Already Have an Account?
                    <Link to="/login">Sign In</Link>
                  </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterScreen;
