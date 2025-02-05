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

const BookSlot =async (slotData) =>{
    debugger;
    try{
        const response = await axiosClient({
            method: 'POST',
            url: `/PatientsConform/PatientBooking`, // Give your API endpoint
            data: JSON.stringify(slotData),
        });
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

const VerifyOtp =async (otpData) =>{
    try{
        const response = await axiosClient({
            method: 'POST',
            url: `/PatientsConform/OTPVerifyByPatients`, // Give your API endpoint
            data: JSON.stringify(otpData),
        });
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}


const DoctorDashboardData = async (data) => {
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

const StatusUpdateByDoctor = async(data) =>{
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

const DoctorDownloadExcel = async(data) =>{
    debugger;
    try {
        const response = await axiosClient({
            method: 'POST',
            url: "DownloadPdfAndExcel/DownloadPatientListInExcel",  // change the endpoint
            data: JSON.stringify(data),
        })
        return response;
    } catch (error) {
        return error;
    }
}

const DoctorDownloadPdf = async(data) =>{
    try {
        const response = await axiosClient({
            method: 'POST',
            url: "/DoctorDashboard/GetPatientBookingDetails",  // change the endpoint
            data: JSON.stringify(data),
        })
        return response;
    } catch (error) {
        return error;
    }
}

const GetDoctorListInEmergency = async () =>{
    try {
        const response = await axiosClient({
            method: 'GET',
            url: "Specialities/EmergencyBookingDoctorList"
        })
        return response;
    } catch (error) {
        
    }
}

const VerifyPhoneOrBookingNo = async(data) =>{
    try {
        const response = await axiosClient({
            method: 'GET',
            url: `/DoctorsInformation/ExistingBoking?BnOrPn=${data}`,
        })
        return response;
    } catch (error) {
        return error;
    }
}

const BookingForExistingPatient = async(data) =>{
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `/DoctorsInformation/ConformExistingBooking`, // change the endpoint
            data: JSON.stringify(data)
        })
        return response;
    } catch (error) {
        return error;
    }
}

const OtpVerificationOfExistingApplication = async(otpData) =>{
    try{
        const response = await axiosClient({
            method: 'POST',
            url: `/DoctorsInformation/ExistingBookingVerification`, // Give your API endpoint
            data: JSON.stringify(otpData),
        });
        return response;
    }
    catch(error)
    {
        console.log(error);
    }
}

const DoctorService = {
    DoctorInformation, DocInfoOnLocation, AllDocInfo, AllDoctorsListInSpeciality, BookSlot, VerifyOtp, DoctorDashboardData,StatusUpdateByDoctor,DoctorDownloadExcel,DoctorDownloadPdf,GetDoctorListInEmergency,VerifyPhoneOrBookingNo,BookingForExistingPatient,OtpVerificationOfExistingApplication
};
export default DoctorService;