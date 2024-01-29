import axiosClient from '../interceptors/axiosInstance';

const UpdateProfile = async (profileData) => {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: `DoctorsInformation/update`,
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

const ProfileUpdate = {
    UpdateProfile
};
export default ProfileUpdate;