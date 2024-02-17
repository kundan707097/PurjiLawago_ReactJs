import axiosClient from '../interceptors/axiosInstance';

const UpdateProfile = async (profileData, endpoint) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(profileData),
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// This action is for getting the profile data of the doctor/patient

const GetProfileData = async(id, endpoint) => {
    try{
        const response = await axiosClient({
            method: 'GET',
            url: `${endpoint}/${id}`, //Need to change the endpoint
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return JSON.parse(response.data);
    }catch(error){
        console.log(error);
    
    }
}

const ProfileUpdate = {
    UpdateProfile, GetProfileData
};
export default ProfileUpdate;