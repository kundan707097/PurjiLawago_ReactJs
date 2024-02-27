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

const AllDoctorsListInSpeciality = async (groupId) => {
    try {
        const response = await axiosClient({
            method: 'GET',
            url: `https://localhost:44324/DoctorsGroup/groupId?groupId=${groupId}`,
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const BookSlot = async (slotData) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `BookSlot`, // Give your API endpoint
            data: JSON.stringify(slotData),
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const VerifyOtp = async (otpData) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `VerifyOtp`, // Give your API endpoint
            data: JSON.stringify(otpData),
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const DoctorDashboardData = async (id) => {
    try {
        const response = await axiosClient({
            method: 'GET',
            url: `DoctorsInformation/${id}`, // Need to change the endpoint
        });
        return response;
    } catch (error) {
        return error;
    }
}

const DoctorService = {
    DoctorInformation, DocInfoOnLocation, AllDocInfo, AllDoctorsListInSpeciality, BookSlot, VerifyOtp, DoctorDashboardData
};
export default DoctorService;