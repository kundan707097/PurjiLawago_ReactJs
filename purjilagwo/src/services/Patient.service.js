import axiosClient from '../interceptors/axiosInstance';

const PatientDashboardData = async (data) => {
    debugger;
    try {
        const response = await axiosClient({
            method: 'POST',
            url: "/PatientDashboard/PatientBookingDashboardDetails",
            data: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        return error;
    }
}

const CancelBookingByPateint = async(data) =>{
    debugger;
    try {
        const res = await axiosClient({
            method: 'POST',
            url: "/PatientDashboard/UpdatePatientBookingStatus",
            data: JSON.stringify(data),
        })
        return res;
    } catch (error) {
        return error;
    }
}

const PatientService = {PatientDashboardData, CancelBookingByPateint};
export default PatientService;