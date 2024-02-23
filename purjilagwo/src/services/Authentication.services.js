import axiosClient from '../interceptors/axiosInstance';


const Login = async (registerData) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `Registration/login`,
            data: JSON.stringify(registerData),
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const Register = async (registerData) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `Registration/signUp`,
            data: registerData,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const VerifyOtp = async (otpData, endpoint) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: endpoint, // Give your API endpoint
            data: JSON.stringify(otpData),
        });
        return response;
    } catch (error) {
        return error;
    }
}

const LoginViaOtp = async (number) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `/Registration/Login-with-otp?mobileNumber=${number}`,
            data: JSON.stringify({ mobileNumber: number }),
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

const ForgotPassword = async (number) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `/Registration/ForgotPassword-MobileNumber?mobileNumber=${number}`,
            data: JSON.stringify({ mobileNumber: number }),
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

const LoginWithNewPassword = async (data) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `Registration/ForgotPassword-WithNewPassword`,
            data: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}


const AuthenticationService = {
    Login, Register, VerifyOtp, LoginViaOtp, ForgotPassword, LoginWithNewPassword
};
export default AuthenticationService;