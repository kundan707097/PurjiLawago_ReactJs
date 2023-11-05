import axiosClient from '../interceptors/axiosInstance';

const register = async (registerData) => {
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

const RegisterService = {
    register
};
export default RegisterService;