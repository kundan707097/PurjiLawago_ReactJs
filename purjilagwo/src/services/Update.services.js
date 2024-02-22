import axiosClient from '../interceptors/axiosInstance';

const UpdateProfile = async (data, endpoint) => {
debugger;
    try {
        const response = await axiosClient({
            method: 'POST',
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
        });
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
};

// This action is for getting the profile data of the doctor/patient

const GetProfileData = async(endpoint) => {
    debugger;
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