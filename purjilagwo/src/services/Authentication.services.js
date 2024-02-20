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

const VerifyOtp = async(otpData) =>{
    try {
        const response = await axiosClient({
            method: 'POST',
            url: "Registration/OTPVerification", // Give your API endpoint
            data: JSON.stringify(otpData),
        });
        return response.data;
    } catch (error) {
        return error;
    }
}

const AuthenticationService = {
    Login, Register, VerifyOtp
};
export default AuthenticationService;