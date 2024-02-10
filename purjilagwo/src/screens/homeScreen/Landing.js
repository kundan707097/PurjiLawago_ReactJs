import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BG1 from "../../assets/image/front-view-nurses-team-hospital_23-2150796738.avif";
import "./Home.css";
import { Location, Search } from "@carbon/icons-react";
import DoctorService from '../../services/Doctor.services';
import svg1 from "../../assets/vectors/Group 270.svg";
import svg2 from "../../assets/vectors/image 40.svg"
import svg3 from "../../assets/vectors/image 32.svg"
import svg4 from "../../assets/vectors/add_location_alt.svg";
import svg5 from "../../assets/vectors/Mask group.svg"
import svg6 from "../../assets/vectors/image 38.svg"
import svg7 from "../../assets/vectors/image 35.svg"
import svg8 from "../../assets/vectors/Group 370.svg"
import svg9 from "../../assets/vectors/Group 269.svg"
import svg10 from "../../assets/vectors/Mask group 1.svg"


export const LandingPage = () => {
  const [locationData, setLocationData] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchName, setSearchName] = useState("");
  const [isVisible, setIsVisible] = useState({
    locationVisible: "true",
    nameVisible: "true",
  });
  const locationSearchRef = useRef(null);
  const nameSearchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationSearchRef.current && !locationSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({ locationVisible: false });
      }
      if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({ nameVisible: false });
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup: remove event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({ nameVisible: false });
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup: remove event listener on unmount 
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {

    (async () => {
      try {
        const fetchLocationInformation = await DoctorService.AllDocInfo()
        if (fetchLocationInformation !== undefined) {
          debugger;
          setLocationData(fetchLocationInformation);
        }
      } catch (error) {
        console.error(`Error fetching doctor information: ${error.message}`);
      }
    })();
  }, []);

  const filteredLocations = locationData.filter((location, index, self) =>
    location.city &&
    location.city.toLowerCase().includes(searchLocation.toLowerCase()) &&
    self.findIndex((otherLocation) => otherLocation.city === location.city) === index
  );
  const filteredName = locationData.filter((location) =>
    location.user_Name && location.user_Name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleDoctorListSelect = (selectedLocation) => {
    window.location.href = `/doctorlist/${selectedLocation}`;
  };

  const handledoctorNameSelect = (selectedLocation) => {
    window.location.href = `/doctorsdetails/${selectedLocation}`;
  };

  const handleButtonClick = () => {
    // Redirect to the DoctorList page
    window.location.href = "/doctorlist";
  };

  return (
    <>
      <Box display={"flex"} sx={{ backgroundColor: "#F0F7FF", zIndex: 12 }}>
        <Box
          sx={{
            mt: { xs: "50px", sm: "50px", md: "130px" },
            px: { xs: "20px", sm: "50px", md: "50px", lg: "100px" },
            width: { xs: "100%", sm: "100%", md: "50%" },
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "50px" }}>
            Keep Your Family More Healthy
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              mt: "20px",
              color: "gray",
            }}
          >
            Health care, health-care, or healthcare is the maintena improvement
            of health via the prevention, diagnosis, of lines, injury, and other
            physical and mental.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#42A5F5",
                borderRadius: "12px",
                mt: "20px",
                mb: { xs: "20px", sm: "40px" },
                width: "100%",
                padding: "10px",
                marginRight: { xs: "auto", sm: "10px" },
              }}
              onClick={handleButtonClick}
            >
              <Link style={{ width: "100%", color: "white" }}>
                Book Appointment with Doctors
              </Link>
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                mt: { xs: "0", sm: "20px" },
                mb: { xs: "0", sm: "40px" },
                background: "white",
                padding: "10px",
                width: "100%",
                boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
                marginLeft: { xs: "auto", sm: "10px" },
              }}
            >
              <Link style={{ width: "100%", color: "#42A5F5" }}>
                Buy Medicines and Essentials
              </Link>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
              border: "2px solid #E5EAF2",
              p: { xs: "30px", sm: "30px", md: "0" },
              borderRadius: "12px",
              width: { xs: "100%", sm: "100%", md: "50rem" },
              position: "relative",
              zIndex: 999,
              backgroundColor: "white",
              mb: "30px",
              mt: { xs: "20px", sm: "00px", md: 0 },
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                my: { xs: "20px", sm: "10px" },
                mx: { md: "10px" },
                width: { md: "40%" },
                position: "relative",
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
                value={searchLocation}
                onInput={(e) => {
                  setSearchLocation(e.target.value);
                  setIsVisible({ locationVisible: true });

                }}
              />

              {searchLocation.length >= 3 && filteredLocations.length > 0 && (
                <Box
                  sx={{
                    display: isVisible.locationVisible ? 'block' : 'none',
                    position: "absolute",
                    backgroundColor: "white",
                    width: "100%",
                    top: { xs: "130px", sm: "120px", md: "40px" },
                    borderRadius: "10px",
                    py: "0.5rem",
                  }}
                  ref={locationSearchRef}
                >
                  <Box>
                    {/*  put the map function here and remove the all the button and put the onclick on button */}
                    {filteredLocations.map((location) => (
                      <button
                        style={{
                          padding: "10px",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left",
                          border: "none",
                        }}
                        className="landing-dropdown"
                        onClick={() => {
                          setSearchLocation(location.city);
                          setIsVisible({ locationVisible: false });
                          handleDoctorListSelect(location.city);
                        }}
                      // value={location.city}
                      >
                        {location.city}
                      </button>
                    ))}
                  </Box>
                </Box>
              )}
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
                value={searchName}
                onInput={(e) => {
                  setSearchName(e.target.value);
                  setIsVisible({ nameVisible: true });
                }}
              />
              {searchName.length >= 3 && filteredName.length > 0 && (
                // <datalist id="locationList">
                <Box
                  sx={{
                    display: isVisible.nameVisible ? 'block' : 'none',
                    position: "absolute",
                    backgroundColor: "white",
                    width: { xs: "84.5%", sm: "89%", md: "62%" },
                    top: { xs: "180px", sm: "160px", md: "50px" },
                    borderRadius: "10px",
                    py: "0.5rem",
                  }}
                  ref={locationSearchRef}
                >
                  <Box>
                    {/*  put the map function here and remove the all the button and put the onclick on button */}
                    {filteredName.map((name) => (
                      <button
                        style={{
                          padding: "10px",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left",
                          border: "none",
                        }}
                        className="landing-dropdown"
                        onClick={() => {
                          setSearchName(name.user_Name);
                          setIsVisible({ nameVisible: false });
                          handledoctorNameSelect(name.id);
                        }}
                      // value={location.city}
                      >
                        {name.user_Name}
                      </button>
                    ))}

                  </Box>
                </Box>
              )}
              {searchName.length >= 3 && (
                <datalist id="doctorsList">
                  {filteredName.map((name) => (
                    <option
                      key={`${name.id}doctor`}
                      value={`${name.first_Name} ${name.last_Name} - ${name.speciality}`}
                    />
                  ))}
                </datalist>
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            borderRadius: "40px",
            height: "80vh",
            transform: "rotate(-45deg)",
            position: "relative",
            top: { md: "-225px", lg: "-200px" },
            borderTopLeftRadius: "100px",
            overflow: "hidden",
            // border: "2px solid #E5EAF2",
            // boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
            zIndex: 12,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <img
            src={BG1}
            alt=""
            style={{
              rotate: "45deg",
            }}
            className="landing-img"
          />
        </Box>
      </Box>
    </>
  );
};

const Landing = () => {
  const [locationData, setLocationData] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchName, setSearchName] = useState("");
  const [isVisible, setIsVisible] = useState({
    locationVisible: "true",
    nameVisible: "true",
  });
  const locationSearchRef = useRef(null);
  const nameSearchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationSearchRef.current && !locationSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({ locationVisible: false });
      }
      if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({ nameVisible: false });
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup: remove event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({ nameVisible: false });
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup: remove event listener on unmount 
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {

    (async () => {
      try {
        const fetchLocationInformation = await DoctorService.AllDocInfo()
        if (fetchLocationInformation !== undefined) {
          debugger;
          setLocationData(fetchLocationInformation);
        }
      } catch (error) {
        console.error(`Error fetching doctor information: ${error.message}`);
      }
    })();
  }, []);

  const filteredLocations = locationData.filter((location, index, self) =>
    location.city &&
    location.city.toLowerCase().includes(searchLocation.toLowerCase()) &&
    self.findIndex((otherLocation) => otherLocation.city === location.city) === index
  );
  const filteredName = locationData.filter((location) =>
    location.user_Name && location.user_Name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleDoctorListSelect = (selectedLocation) => {
    window.location.href = `/doctorlist/${selectedLocation}`;
  };

  const handledoctorNameSelect = (selectedLocation) => {
    window.location.href = `/doctorsdetails/${selectedLocation}`;
  };

  const handleButtonClick = () => {
    // Redirect to the DoctorList page
    window.location.href = "/doctorlist";
  };

  return (
    <>


      <Box sx={{ display: "flex" }}>

      {/* Left box */}
        <Box sx={{ width: "50%" }}>
          <img src={svg1} alt="" style={{ position: "absolute", height: "80%", width: "40%" }} />

          <Box sx={{ pl: 10, pt: 4, }}>

            {/* Image and support */}

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={svg2} alt="" />
              <Typography sx={{ color: "#64EBB6", fontSize: "20px", fontWeight: 600, ml: 2 }} >
                SUPPORT
              </Typography>
            </Box>

            {/* Text and heading */}

            <Box sx={{ mt: 7, backgroundColor: "transparent" }}>
              <Typography sx={{ fontSize: "24px", color: "#64EBB6", fontWeight: 700, }}>
                <span>"</span><span style={{ color: "#5D6566" }}>JOIN THE BEST BE THE BEST</span><span style={{ marginRight: 14 }}>"</span>
                <span>"</span><span style={{ color: "#5D6566" }}>JOIN US BE THE BEST</span><span>"</span>
              </Typography>
              <Typography sx={{ fontSize: "65px", fontWeight: 900, color: "#42A5F5", }}>
                Keep Your Family
              </Typography>
              <Typography fontWeight={900} fontSize={"65px"} color={"#42A5F5"}>
                More Healthy
              </Typography>

              <Typography fontWeight={400} fontSize={"20px"} color={"#5D6566"} mt={3}>
                Healthcare covers prevention, diagnosis, treatment, and management of physical and mental conditions to maintain and enhance health.
              </Typography>
            </Box>

            {/* Appointment and buy medcine  */}

            <Box sx={{ mt: 8, display: "flex" }}>
              <Link to="/" style={{ zIndex: 999 }}>
                <Box sx={{ backgroundColor: "#42A5F5", width: "250px", textAlign: "center", p: 1.3, borderRadius: 3, fontSize: "15px", fontWeight: 900, color: "white", border: "2px solid #42A5F5", "&:hover": { color: "#42A5F5", backgroundColor: "white" } }}>
                  Make a Appointment
                </Box>
              </Link>

              <Link to="/" style={{ marginLeft: 20, zIndex: 999 }}>
                <Box sx={{ backgroundColor: "white", width: "250px", textAlign: "center", p: 1.3, borderRadius: 3, fontSize: "15px", fontWeight: 900, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" } }}>
                  <img src={svg3} alt="" height={"20px"} style={{ marginRight: 10 }} />
                  Buy Medicine
                </Box>
              </Link>

            </Box>

            {/* Search box on home page */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
                border: "1px solid #42A5F5",
                p: { xs: "30px", sm: "30px", md: "0" },
                borderRadius: "12px",
                width: { xs: "100%", sm: "100%", md: "50rem" },
                position: "relative",
                zIndex: 999,
                backgroundColor: "white",
                mb: "30px",
                mt: { xs: "20px", sm: "0px", md: 6 },
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                  my: { xs: "20px", sm: "10px" },
                  mx: { md: "10px" },
                  width: { md: "40%" },
                  position: "relative",
                }}
              >
                <img src={svg4} alt="" height={"20px"} />
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
                  value={searchLocation}
                  onInput={(e) => {
                    setSearchLocation(e.target.value);
                    setIsVisible({ locationVisible: true });

                  }}
                />

                {searchLocation.length >= 3 && filteredLocations.length > 0 && (
                  <Box
                    sx={{
                      display: isVisible.locationVisible ? 'block' : 'none',
                      position: "absolute",
                      backgroundColor: "white",
                      width: "100%",
                      top: { xs: "130px", sm: "120px", md: "40px" },
                      borderRadius: "10px",
                      py: "0.5rem",
                    }}
                    ref={locationSearchRef}
                  >
                    <Box>
                      {/*  put the map function here and remove the all the button and put the onclick on button */}
                      {filteredLocations.map((location) => (
                        <button
                          style={{
                            padding: "10px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                            border: "none",
                          }}
                          className="landing-dropdown"
                          onClick={() => {
                            setSearchLocation(location.city);
                            setIsVisible({ locationVisible: false });
                            handleDoctorListSelect(location.city);
                          }}
                        // value={location.city}
                        >
                          {location.city}
                        </button>
                      ))}
                    </Box>
                  </Box>
                )}
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
                  value={searchName}
                  onInput={(e) => {
                    setSearchName(e.target.value);
                    setIsVisible({ nameVisible: true });
                  }}
                />
                {searchName.length >= 3 && filteredName.length > 0 && (
                  // <datalist id="locationList">
                  <Box
                    sx={{
                      display: isVisible.nameVisible ? 'block' : 'none',
                      position: "absolute",
                      backgroundColor: "white",
                      width: { xs: "84.5%", sm: "89%", md: "62%" },
                      top: { xs: "180px", sm: "160px", md: "50px" },
                      borderRadius: "10px",
                      py: "0.5rem",
                    }}
                    ref={locationSearchRef}
                  >
                    <Box>
                      {/*  put the map function here and remove the all the button and put the onclick on button */}
                      {filteredName.map((name) => (
                        <button
                          style={{
                            padding: "10px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                            border: "none",
                          }}
                          className="landing-dropdown"
                          onClick={() => {
                            setSearchName(name.user_Name);
                            setIsVisible({ nameVisible: false });
                            handledoctorNameSelect(name.id);
                          }}
                        // value={location.city}
                        >
                          {name.user_Name}
                        </button>
                      ))}

                    </Box>
                  </Box>
                )}
                {searchName.length >= 3 && (
                  <datalist id="doctorsList">
                    {filteredName.map((name) => (
                      <option
                        key={`${name.id}doctor`}
                        value={`${name.first_Name} ${name.last_Name} - ${name.speciality}`}
                      />
                    ))}
                  </datalist>
                )}
              </Box>

              <Box sx={{ backgroundColor: "#42A5F5", borderRadius: "0px 12px 12px 0", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer" }}>
                <Search />
                <Typography sx={{ ml: 1 }}>Search</Typography>
              </Box>
            </Box>

          </Box>



        </Box>

        {/* Right Box */}


        <Box sx={{ width: "50%", }}>
          <Box sx={{position: "absolute", top: "0", zIndex:1, right:"-4.3rem"}}>
            <svg width="800" height="750" viewBox="0 0 916 986" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="908.081" height="922.427" rx="52.9326" transform="matrix(0.995583 0.0938893 0.165264 0.986249 -7.98901 -4.64111)" fill="#42A5F5" />
            </svg>
          </Box>
          <Box sx={{zIndex:1, position: "absolute", top:"7.07rem", right:2, }}>
            <img src={svg5} alt=""  style={{height: "40rem"}}/>
          </Box>
          <Box  sx={{zIndex:3, position: "absolute", top:"180px", overflow:"hidden" }}>
            <img src={svg6} alt="img" style={{height:"3.3rem"}}/>
            <Typography sx={{fontSize: "12px", color: '#42A5F5'}}>Daily Visit</Typography>
          </Box>
          <Box sx={{zIndex:1, position: "absolute", top:"24rem", right: "36.5rem" }}>
            <img src={svg7} alt=""  style={{height: "3.5rem"}}/>
          </Box>
          <Box sx={{zIndex:1, position: "absolute", top:"32rem", right: "35.4rem" }}>
            <img src={svg8} alt=""  style={{height: "3.5rem"}}/>
          </Box>
          <Box sx={{zIndex:1, position: "absolute", top:"38rem", right: "0" }}>
            <img src={svg9} alt=""  style={{height: "3.5rem"}}/>
          </Box>
          <Box sx={{zIndex:1, position: "absolute", top:"12rem", right: "0" }}>
            <img src={svg10} alt=""  style={{height: "8rem"}}/>
          </Box>

        </Box>
      </Box>

    </>


  )
}


export default Landing;
