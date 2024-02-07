import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../style/DoctorList.css';
import DoctorService from '../../services/Doctor.services';
import DoctorsListCard from './DoctorsListCard';
import { Box, Typography, Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Location, LocationFilled, Search } from '@carbon/icons-react';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import DataNotFound from '../../components/DataNotFound';

function Doctors() {
    const { groupId } = useParams();
    const { location: routeLocation } = useParams();
    const [location, setLocation] = useState(routeLocation || ''); // Initialize with the route location if available
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [doctorName, setDoctorName] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            // You can adjust the threshold as needed
            const threshold = 70;

            setIsSticky(offset > threshold);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                let response = null;
                if (groupId) {
                    response = await DoctorService.AllDoctorsListInSpeciality(groupId);
                }
                else if (location) {
                    response = await DoctorService.DocInfoOnLocation(location);
                }
                else {
                    response = await DoctorService.AllDocInfo();
                }

                if (response !== undefined) {
                    setDoctorInfo(response);
                    //.doctorsDetaiList
                    //setLoading(false); 
                }
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching doctor information: ${error.message}`);
            }
        })();
    }, [location]);


    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };
    const handledoctorNameSelect = async (id) => {
        window.location.href = `/doctorsdetails/${id}`;
    };

    const filteredLocations = doctorInfo !== null ? doctorInfo.filter((data, index, self) =>
        data.city &&
        data.city.toLowerCase().includes(location.toLowerCase()) &&
        self.findIndex((otherLocation) => otherLocation.city === data.city) === index
    )
        : [];

    const filteredDoctInfo = doctorInfo !== null
        ? doctorInfo.filter((data) =>
            data.city && data.city.toLowerCase().includes(location.toLowerCase())
        )
        : [];

    const handleBookConsultation = (doctorId) => {
        // Perform actions with the doctorId and other data
        console.log(`Book consultation for doctor with ID: ${doctorId}`);
        // You can navigate to another page, show a modal, etc.
    };

    const handleDoctorListClick = (doctorId) => {
        window.location.href = `/doctorsdetails/${doctorId}`;
    };

    return (
        <>
            {loading ? (<Loading />) : (
                <Box sx={{ backgroundColor: "#F5F5F5", position: "absolute", width: "100%" }}>

                    <Box sx={{ backgroundColor: "white", borderBottom: "2px solid #E5EAF2", boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", py: isSticky ? "20px" : "30px", position: isSticky ? "sticky" : "static", top: "0px", zIndex: 999, transition: "padding 0.2s ease-in-out", width: "100%" }}>
                        <Container sx={{ width: { sx: "100%", md: "70%" } }} >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
                                    border: "1px solid black",
                                    px: { xs: "10px", md: "0" },
                                    zIndex: 1,
                                    backgroundColor: "white",
                                    flexDirection: { xs: "column", sm: "column", md: "row" },
                                    color: "black", borderRadius: "12px",

                                }}
                            >
                                <Box
                                    sx={{
                                        borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                                        my: { xs: "20px", sm: "10px" },
                                        mx: { md: "10px" },
                                        width: { md: "40%" },
                                    }}
                                >
                                    <Location />
                                    <input
                                        style={{
                                            border: "none",
                                            color: "#42A5F5",
                                            width: "80%",
                                            marginLeft: "5px",
                                        }}
                                        id="searchLocation"
                                        type="text"
                                        placeholder="Location"
                                        list="locationList"
                                        value={location}
                                        onInput={(e) => {
                                            const selectedValue = e.target.value;
                                            setLocation(selectedValue);
                                            const matchingLocation = filteredLocations.find((data) => data.city === selectedValue);

                                            if (matchingLocation) {
                                                // If there is a match, trigger the handleLocationChange function
                                                handleLocationChange(selectedValue);
                                            }
                                        }}
                                    />


                                </Box>

                                <Box
                                    sx={{
                                        my: { xs: "10px" },
                                        width: { md: "70%" },
                                        mx: { md: "5px" },
                                    }}
                                >
                                    <Search />
                                    <input
                                        id="doctorsName"
                                        type="text"
                                        style={{
                                            border: "none",
                                            color: "#42A5F5",
                                            marginLeft: "5px",
                                            width: "80%",
                                        }}
                                        placeholder="Search doctors, clinics, hospitals,etc"
                                        list="doctorsList"
                                        value={doctorName}
                                        onInput={(e) => {
                                            setDoctorName(e.target.value);
                                            const arrayOfWords = e.target.value.split(" ");
                                            const matchingLocation = filteredLocations.find((data) => data.user_Name === e.target.value);

                                            if (matchingLocation) {
                                                handledoctorNameSelect(matchingLocation.id);
                                            }
                                        }}

                                    />

                                </Box>
                            </Box>

                            {location.length > 0 && (


                                <Box sx={{ color: "black", mt: 1 }} >
                                    {/* <Typography >Location: <span>{location}</span> </Typography> */}
                                    <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#409FEC" }} >Doctor available: <span >{doctorInfo && doctorInfo.length > 0 ? (
                                        doctorInfo.length) : (0)}</span> </Typography>
                                    <Box sx={{ height: "4px", width: "10%", backgroundColor: "#409FEC", mt: 1 }}>

                                    </Box>
                                </Box>


                            )}

                        </Container>
                    </Box>

                    <Stack spacing={{ xs: 1, sm: 3 }} direction="row" useFlexGap flexWrap="wrap" sx={{ justifyContent: "center", py: "20px", }}>

                        {doctorInfo && doctorInfo.length > 0 ? (
                            doctorInfo.map((doctor) => (
                                <Card sx={{ width: 400, borderRadius: "12px", boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", border: "2px solid #E5EAF2", }}  >
                                    <CardActionArea sx={{ p: "20px" }} onClick={() => handleDoctorListClick(doctor.id)}>
                                        <Box sx={{ display: "flex", alignItems: "start", }}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="../../images/doc-1.jpg"
                                                sx={{ width: 100, height: 100, border: "1px solid #42A5F5", mt: "1rem" }}
                                            />
                                            <CardContent sx={{ height: 140 }}>
                                                <Typography variant="h5" component="div">
                                                    {doctor?.user_Name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                                                    {doctor?.speciality}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                                                    {doctor?.experience} experience
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                                                    {doctor?.education}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" lineHeight={1.5} fontWeight={600}>
                                                    Starts at ₹45000
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <Box>
                                            <Box sx={{ display: "flex", alignItems: "center", mb: "5px" }}><img src="../images/language.png" alt="" style={{ width: "2rem" }} /><Typography sx={{ ml: "10px", fontSize: "15px" }}>English, Hindi</Typography></Box>
                                            <Box sx={{ display: "flex", alignItems: "center", }}><LocationFilled color='#0A6BD2' size={20} /><Typography sx={{ ml: "21px", fontSize: "15px" }}>{doctor?.doctor_Address}</Typography></Box>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            sx={{ width: "100%", background: "#42A5F5", borderRadius: "12px", mt: "10px" }}
                                        >
                                            Consult Now
                                        </Button>
                                    </CardActionArea>
                                </Card>
                            ))

                        ) : (
                            <>
                                {/* Replace the card with the not found */}

                                <DataNotFound />    

                            </>
                        )}


                    </Stack>

                    <Footer />

                </Box>
            )}

        </>
    )
}

export default Doctors