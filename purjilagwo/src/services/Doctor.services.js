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
const DocInfoOnLocation = async (location) => {
    try {
        const response = await axiosClient({
            method: 'GET',
            url: `DoctorsInformation/location?filterBasedOnLocation=${location}`,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
const AllDocInfo = async (location) => {
    try {
        const response = await axiosClient({
            method: 'GET',
            url: `https://localhost:44324/DoctorsInformation`,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


const DoctorService = {
    DoctorInformation,DocInfoOnLocation,AllDocInfo
};
export default DoctorService;