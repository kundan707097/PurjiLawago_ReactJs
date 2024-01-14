import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BG1 from "../../assets/image/front-view-nurses-team-hospital_23-2150796738.avif";
import "./Home.css";
import { Location, Search } from "@carbon/icons-react";

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
        setIsVisible({locationVisible: false});
      }
      if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
        // Clicked outside the container
        setIsVisible({nameVisible: false});
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
        setIsVisible({nameVisible: false});
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
    debugger;
    const fetchLocationInformation = async () => {
      try {
        const response = await fetch(
          "https://localhost:44324/DoctorsInformation"
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setLocationData(data);
        }
      } catch (error) {
        console.error("Error fetching location information:", error);
      }
    };

    fetchLocationInformation();
  }, []);

  const filteredLocations = locationData.filter((location) =>
    location.city.toLowerCase().includes(searchLocation.toLowerCase())
  );
  const filteredName = locationData.filter((location) =>
    location.first_Name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleDoctorListSelect = (selectedLocation) => {
    window.location.href = `/doctorlist/${selectedLocation}`;
  };

  const handledoctorNameSelect = (selectedLocation) => {
    window.location.href = `/doctorsdetails/${selectedLocation}`;
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
                  setIsVisible({locationVisible: true});
                  if (
                    filteredLocations.some(
                      (location) => location.city === e.target.value
                    )
                  ) {
                    handleDoctorListSelect(e.target.value);
                  }
                }}
              />

              { searchLocation.length >= 3 && (
                <Box
                  sx={{
                    display: isVisible.locationVisible ? 'block' : 'none',
                    position: "absolute",
                    backgroundColor: "white",
                    width: "100%",
                    top: {xs: "130px", sm: "120px", md: "40px"},
                    borderRadius: "10px",
                    py: "0.5rem",
                  }}
                  ref={locationSearchRef} 
                >
                  <Box>
                    {/*  put the map function here and remove the all the button and put the onclick on button */}
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                      // value={location.city}
                    >
                      Bihar
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                    >
                      Chattighar
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                    >
                      London
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                    >
                      USa
                    </button>
                  </Box>
                </Box>
              )}

              {searchLocation.length >= 3 && (
                <datalist id="locationList">
                  {filteredLocations.map((location) => (
                    <option
                      key={`${location.id}location`}
                      value={location.city}
                    />
                  ))}
                </datalist>
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
                  setIsVisible({nameVisible: true});
                  debugger;
                  const arrayOfWords = e.target.value.split(" ");
                  if (
                    filteredName.some(
                      (name) => name.first_Name === arrayOfWords[0]
                    )
                  ) {
                    debugger;
                    handledoctorNameSelect(filteredName[0].id);
                  }
                }}
              />
              {searchName.length >= 3 && (
                // <datalist id="locationList">
                <Box
                  sx={{
                    display: isVisible.nameVisible ? 'block' : 'none',
                    position: "absolute",
                    backgroundColor: "white",
                    width: {xs: "84.5%", sm: "89%", md: "62%"},
                    top: {xs: "180px", sm: "160px", md: "50px"},
                    borderRadius: "10px",
                    py: "0.5rem",
                  }}
                  ref={locationSearchRef} 
                >
                  <Box>
                    {/*  put the map function here and remove the all the button and put the onclick on button */}
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                      // value={location.city}
                    >
                      Bihar
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                    >
                      Chattighar
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                    >
                      London
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                      }}
                      className="landing-dropdown"
                    >
                      USa
                    </button>
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

export default Landing;
