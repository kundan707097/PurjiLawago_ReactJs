import axiosClient from '../interceptors/axiosInstance';


const DoctorInformation = async (id) => {
    try {
        const response = await axiosClient({
            method: 'GET',
            url: `DoctorsInformation/${id}`,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const DoctorService = {
    DoctorInformation
};
export default DoctorService;