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

const LoginService = {
    Login
};
export default LoginService;

