import axiosClient from '../interceptors/axiosInstance';

const AdminDashboardData = async (data) => {
    debugger;
    try {
        const response = await axiosClient({
            method: 'POST',
            url: "/DoctorDashboard/GetPatientBookingDetails",
            data: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        return error;
    }
}

const StatusUpdateByAdmin = async (data) => {
    debugger;
    try {
        const response = await axiosClient({
            method: 'POST',
            url: "/DoctorDashboard/UpdatepatientStatus",  // change the endpoint
            data: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        return error;
    }
}

const AdminService = {
    AdminDashboardData,StatusUpdateByAdmin
}

export default AdminService;