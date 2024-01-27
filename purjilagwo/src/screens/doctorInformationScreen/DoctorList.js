import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../style/DoctorList.css';
import DoctorService from '../../services/Doctor.services';

function Doctors() {
    const { groupId } = useParams();
    const { location: routeLocation } = useParams();
    const [location, setLocation] = useState(routeLocation || ''); // Initialize with the route location if available
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [doctorName, setDoctorName] = useState(null);
    debugger;

    useEffect(() => {
        (async () => {
            try {
                let response=null;
                debugger;
                if(groupId){
                    response = await DoctorService.AllDoctorsListInSpeciality(groupId);
                    debugger;
                }
                else if(location){
                response = await DoctorService.DocInfoOnLocation(location);
                }
                else{
                    response = await DoctorService.AllDocInfo();
                }

                if (response !== undefined) {
                    setDoctorInfo(response);
                    //.doctorsDetaiList
                }
            } catch (error) {
                console.error(`Error fetching doctor information: ${error.message}`);
            }
        })();
    }, [location]);


    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };
    const handledoctorNameSelect = async (id) => {
        //     const dataArray = [];
        //    const response = await DoctorService.DoctorInformation(id);
        //    if (response !== undefined) {
        //     debugger;
        //     dataArray.push(response);
        //     debugger;
        //     setDoctorInfo(dataArray);
        // }
        window.location.href = `/doctorsdetails/${id}`;
    };
    // const filteredLocations = doctorInfo !== null
    // ? doctorInfo.filter((data) =>
    //     data.city && data.city.toLowerCase().includes(location.toLowerCase())
    // )
    // : [];

    const filteredLocations =doctorInfo !== null? doctorInfo.filter((data, index, self) =>
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
            <div class="doctors-wrapper">
                <div className="doctors-container">
                    <div className="search-bar">
                        <div className="search-location">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <img src="../images/location.svg" alt="" />
                                </span>
                                <input
                                    id="searchLocation"
                                    type="text"
                                    className="form-control"
                                    placeholder="Location"
                                    aria-label=""
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
                                {location.length >= 3 && (
                                    <datalist id="locationList">
                                        {filteredLocations.map((data) => (
                                            <option key={`${data.id}location`} value={data.city} />
                                        ))}
                                    </datalist>
                                )}
                            </div>
                        </div>

                        <div className="search-doctor">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <img src="../../images/search.svg" alt="" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search doctor"
                                    aria-label=""
                                    list="doctorList"
                                    value={doctorName}
                                    onInput={(e) => {
                                        setDoctorName(e.target.value);
                                        const arrayOfWords = e.target.value.split(" ");
                                        const matchingLocation = filteredLocations.find((data) => data.user_Name === e.target.value);
                                        debugger;
                                        if (matchingLocation) {
                                            debugger;
                                            handledoctorNameSelect(matchingLocation.id);
                                        }
                                    }}


                                />
                                {doctorName?.length >= 3 && (
                                    <datalist id="doctorList">
                                        {filteredDoctInfo.map((data) => (
                                            <option key={`${data.id}data`}
                                                value={`${data.user_Name}`} />
                                        ))}
                                    </datalist>
                                )}
                            </div>
                        </div>

                        <div className="search-result">
                            <p>Location: <span className="bold">{location}</span></p>
                            <p>Doctors available: <span className="bold">{doctorInfo && doctorInfo.length > 0 ? (
                                doctorInfo.length) : (0)}</span></p>
                        </div>
                    </div>

                    <div className="doctors-list">
                        {doctorInfo && doctorInfo.length > 0 ? (
                            // If doctorInfo has data, map through it
                            doctorInfo.map((doctor) => (
                                <div className="doc-card">
                                    <div className="block1" onClick={() => handleDoctorListClick(doctor.id)}>
                                        <div className="left-col">
                                            <div className="dp">
                                                <img src="../images/doc-1.jpg" alt="" />
                                            </div>
                                        </div>

                                        <div className="right-col">
                                            <h2>{doctor?.user_Name} </h2>
                                            <p>{doctor?.speciality}</p>
                                            <p> {doctor?.experience} experience</p>
                                            <p className="edu"> {doctor?.education}</p>
                                            <p className="price">Starts at ₹4500</p>
                                        </div>
                                    </div>

                                    <div className="block2">
                                        <div className="line1">
                                            <div className="img">
                                                <img src="../images/language.png" alt="" />
                                            </div>
                                            <p>English, Hindi</p>
                                        </div>

                                        <div className="line2">
                                            <div className="img">
                                                <img src="../images/address.svg" alt="" />
                                            </div>
                                            <p> {doctor?.doctor_Address}</p>
                                        </div>
                                    </div>

                                    <div className="btn-container">
                                        <button onClick={() => handleBookConsultation(doctor.id)} >Book Video Consult</button>
                                        <button>Book Hospital Visit</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // If no data found
                            <p>No data found.</p>
                        )}



                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctors