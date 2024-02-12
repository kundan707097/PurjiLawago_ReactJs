import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";
import { Search } from "@carbon/icons-react";


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
import svg11 from "../../assets/vectors/hero_bg.svg";

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

  return (
    <>

      <Box sx={{ display: "flex", mb: 10 }}>

        {/* Left box */}
        <Box sx={{ width: "50%" }}>
          <Box sx={{position: "absolute", height:{xs: "30%", lg: "80%"}, width: "40%", top: {xs: "5rem", lg:0}}}>

            <img src={svg1} alt="" style={{ height: "100%" }} />
          </Box>

          <Box sx={{ pl: { xs: 2, lg: 10 }, pt: {xs: 2, lg:14}, }}>

            {/* Image and support */}

            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
              <img src={svg2} alt="" />
              <Typography sx={{ color: "#64EBB6", fontSize: "20px", fontWeight: 600, ml: 2 }} >
                SUPPORT
              </Typography>
            </Box>

            {/* Text and heading */}

            <Box sx={{ mt: { xs: 10, lg: 3 }, backgroundColor: "transparent" }}>
              <Typography sx={{ fontSize: { xs: '12px', lg: "24px" }, color: "#64EBB6", fontWeight: 700, }}>
                <span>“</span><span style={{ color: "#5D6566" }}>JOIN THE BEST BE THE BEST</span><span style={{ marginRight: 14 }}>”</span>
                <Box sx={{ display: { lg: 'none' } }} />
                <span>“</span><span style={{ color: "#5D6566" }}>JOIN US BE THE BEST</span><span>”</span>
              </Typography>
              <Typography sx={{ mt: { xs: 2, lg: 0 }, fontSize: { xs: "22px", lg: "65px" }, fontWeight: 900, color: "#42A5F5", }}>
                Keep Your Family
              </Typography>
              <Typography fontWeight={900} fontSize={"65px"} color={"#42A5F5"} sx={{ fontSize: { xs: "22px", lg: "65px" } }}>
                More Healthy
              </Typography>

              <Typography fontWeight={400} fontSize={"20px"} color={"#5D6566"} mt={3} sx={{ display: { xs: "none", md: "initial" } }}>
                Healthcare covers prevention, diagnosis, treatment, and management of physical and mental conditions to maintain and enhance health.
              </Typography>
            </Box>

            {/* Appointment and buy medcine  */}

            <Box sx={{ mt: { xs: 2, lg: 8 }, display: "flex" }}>
              <Link to="/doctorlist" style={{ zIndex: 999 }}>
                <Box sx={{ backgroundColor: "#42A5F5", width: { xs: "140px", lg: "250px" }, textAlign: "center", p: 1.3, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 600, color: "white", border: "2px solid #42A5F5", "&:hover": { color: "#42A5F5", backgroundColor: "white" } }}>
                  Make a Appointment
                </Box>
              </Link>

              <Link to="/" style={{ marginLeft: 20, zIndex: 999 }}>
                <Box sx={{ backgroundColor: "white", width: "250px", textAlign: "center", p: 1.3, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, display: { xs: "none", lg: "block" } }}>
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
                border: "1px solid #42A5F5",
                borderRadius: "12px",
                width: { xs: "100%", md: "50rem" },
                position: {xs: "absolute", lg:"relative"},
                left: { xs: 2, lg: 0 },
                zIndex: 10,
                backgroundColor: "white",
                mb: "40px",
                mt: { xs: "20px", sm: "0px", md: 6 },
              }}
            >
              <Box
                sx={{
                  borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                  my: {xs: "4px", lg:"10px"},
                  mx: { md: "10px" },
                  width: "40%",
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
                  my: {xs: "4px", lg:"10px"},
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

              <Box sx={{ backgroundColor: "#42A5F5", borderRadius: "0px 12px 12px 0", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer",}}>
                <Search />
                <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" } }}>Search</Typography>
              </Box>
            </Box>

          </Box>

        </Box>

        {/* Right Box */}


        <Box sx={{ width: "50%", overflow: "hidden" }}>
          <Box sx={{ position: "absolute", top: "0", zIndex: 1, right: "-4.3rem", height: { xs: "18rem", lg: "46.9rem" },  }}>
            <img src={svg11} alt="" height={"100%"} />
          </Box>
          <Box sx={{ zIndex: 1, position: "absolute", top: { xs: "5.8rem", lg: "7.07rem" }, right: 2, height: { xs: "12rem", lg: "40rem" } }}>
            <img src={svg5} alt="" style={{ height: "100%" }} />
          </Box>
          <Box sx={{ zIndex: 3, position: "absolute", top: "180px", overflow: "hidden", display: { xs: "none", lg: "initial" } }}>
            <img src={svg6} alt="img" style={{ height: "3.3rem" }} />
            <Typography sx={{ fontSize: "12px", color: '#42A5F5' }}>Daily Visit</Typography>
          </Box>
          <Box sx={{ zIndex: 1, position: "absolute", top: { xs: "9rem", lg: "24rem" }, right: { xs: "11rem", lg: "36.5rem" }, height: { xs: "2rem", lg: "3.5rem" } }}>
            <img src={svg7} alt="" style={{ height: "100%" }} />
          </Box>
          <Box sx={{ zIndex: 1, position: "absolute", top: { xs: "15rem", lg: "32rem" }, right: { xs: 0, lg: "35.4rem" }, height: { xs: "2rem", lg: "3.5rem" } }}>
            <img src={svg8} alt="" style={{ height: "100%" }} />
          </Box>
          <Box sx={{ zIndex: 1, position: "absolute", top: { xs: "13rem", lg: "38rem" }, right: "0", height: { xs: "2rem", lg: "3.5rem" } }}>
            <img src={svg9} alt="" style={{ height: "100%" }} />
          </Box>
          <Box sx={{ zIndex: 1, position: "absolute", top: { xs: "7rem", lg: "12rem" }, right: "0", height: { xs: "3rem", lg: "8rem" } }}>
            <img src={svg10} alt="" style={{ height: "100%" }} />
          </Box>

        </Box>
      </Box>

    </>


  )
}


export default Landing;
