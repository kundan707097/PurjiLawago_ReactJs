import axiosClient from '../interceptors/axiosInstance';

const UpdateProfile = async (DoctorProfileData) => {
debugger;
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `https://localhost:44324/DoctorsInformation/update`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(DoctorProfileData),
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// This action is for getting the profile data of the doctor/patient

const GetProfileData = async(endpoint) => {
    try{
        const response = await axiosClient({
            method: 'GET',
            url: endpoint, //Need to change the endpoint
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // console.log(response.data)
        return response.data;
    }catch(error){
        console.log(error);
    
    }
}

const ProfileUpdate = {
    UpdateProfile, GetProfileData
};
export default ProfileUpdate;