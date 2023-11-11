import React, { useState, useEffect } from 'react';
import Services from "../../components/Home/Services";
import Department from "../../components/Home/Departments";
import BookAppointment from "../../components/Home/BookAppointment";
import ServiceForYou from "../../components/Home/ServiceForYou";



function Home() {

    const [locationData, setLocationData] = useState([]);
    const [searchLocation, setSearchLocation] = useState('');

    useEffect(() => {
        debugger
        const fetchLocationInformation = async () => {
            try {
                const response = await fetch('https://localhost:44324/DoctorsInformation');
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setLocationData(data);
                }
            } catch (error) {
                console.error('Error fetching location information:', error);
            }
        };

        fetchLocationInformation();
    }, []);

    const filteredLocations = locationData.filter((location) =>
        location.city.toLowerCase().includes(searchLocation.toLowerCase())
    );

    const handleSelect = (selectedLocation) => {
        window.location.href = `/doctorlist/${selectedLocation}`;
    };


    return (
        <>


            <section className="section mainBannerArea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12">
                            <div className="bannerContent">
                                <h2>Hello there!</h2>
                                <p> Always caring about your health, we are here to help you!</p>
                                <div className="btn-inline">
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Book Appointment with Doctors <i className="fa-solid fa-angles-right"></i></button>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Buy Medicine and Essentials <i className="fa-solid fa-angles-right"></i></button>
                                </div>
                                <div className="input-group mb-3 findLocation mt-3">
                                    <span className="input-group-text"><i className="fa-solid fa-location-dot"></i></span>

                                    <div>
                                        <input
                                            id="searchLocation"
                                            type="text"
                                            className="form-control"
                                            placeholder="Location"
                                            aria-label=""
                                            list="locationList"
                                            value={searchLocation}
                                            onInput={(e) => {
                                                setSearchLocation(e.target.value);
                                                if (filteredLocations.some((location) => location.city === e.target.value)) {
                                                    handleSelect(e.target.value);
                                                }
                                            }}
                                        />
                                        {searchLocation.length >= 3 && (
                                            <datalist id="locationList">
                                                {filteredLocations.map((location) => (
                                                    <option
                                                        key={location.id}
                                                        value={location.city}

                                                    />
                                                ))}
                                            </datalist>
                                        )}
                                    </div>
                                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    <input id="doctorsName" type="text" className="form-control" placeholder="Search" aria-label="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bannerImg"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section introVido_area spt0">
                <div className="container">
                    <div className="introVideoWrap">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="section_title aboutVidoe">
                                    <h2 className="common__Title-sc-1e9isft-10 gkwLHp">Deliver stunning <span>video</span></h2>
                                    <p className="common__Subheading-sc-1e9isft-12 begqnA subheading">Dynamically resize, crop, compress, and more with the URL-based video transformation parameters. Trim videos, overlay text or images, and personalize videos for every user.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <video className="border media-with-dots-without-shadow" width="" autoplay="" loop="" muted="" playsinline=""><source src="https://ik.imgkit.net/ikmedia/video-api/Dynamically_resize_video_lgTM6FGbJo.mp4?tr=w-1000" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />
            <Department />
            <BookAppointment />
            <ServiceForYou />


        </>
    );
}

export default Home;
