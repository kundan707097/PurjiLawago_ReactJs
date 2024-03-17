import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "@carbon/icons-react";



import DoctorService from '../../services/Doctor.services';

const SearchBtn = () => {
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
        
        

          <Box sx={{ pl: { xs: 2, lg: 10 }, pt: { xs: 0, lg: 4 }, }}>

           
            {/* Search box on home page */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid #42A5F5",
                borderRadius: "12px",
                width: { xs: "100%", md: "50rem" },
                alignItems: "center",
              
               
               
                backgroundColor: "white",
                mb: "40px",
                
              }}
            >
              <Box
              
              >
                <img src="../images/Home/add_location_alt.svg" alt="" height={"20px"} />
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
                      width: "100%",
                      top: { xs: "40px", sm: "120px", md: "45px" },
                      left: { xs: 3, lg: 0 },
                    }}
                    ref={locationSearchRef}
                  >
                    {filteredLocations.map((location) => (
                      <Box component={"button"} sx={{
                        display: "flex", alignItems: "center", px: 1, bgcolor: "white", ":hover": {
                          backgroundColor: "#F5F5F5"
                        }, width: "100%", border: "1px solid #F5F5F5"
                      }} onClick={() => {
                        setSearchLocation(location.city);
                        setIsVisible({ locationVisible: false });
                        handleDoctorListSelect(location.city);
                      }} key={location}>
                        {/* put the map function here and remove the all the button and put the onclick on button */}

                        <Box sx={{ bgcolor: "#F5F5F5", p: .5, borderRadius: "100px", px: 1 }}>
                          <Search size={15} />
                        </Box>
                        <Box
                          sx={{
                            p: "10px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          <Typography sx={{ color: "black", fontSize: { xs: "14px", md: "16px" } }}>{location.city}</Typography>
                        </Box>
                      </Box>
                    ))}


                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  my: { xs: "4px", lg: "10px" },
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
                {searchName.length >= 3 && filteredLocations.length > 0 && (
                  <Box
                    sx={{
                      display: isVisible.nameVisible ? 'block' : 'none',
                      position: "absolute",
                      width: { xs: "98%", sm: "89%", md: "55%" },
                      top: { xs: "45px", sm: "160px", md: "55px" },
                      left: { xs: 3, lg: "16rem" },
                    }}
                    ref={locationSearchRef}
                  >
                    {/*  put the map function here and remove the all the button and put the onclick on button */}
                    {filteredName.map((name) => (
                      <Box component={"button"} sx={{
                        display: "flex", alignItems: "center", px: 1, bgcolor: "white", ":hover": {
                          backgroundColor: "#F5F5F5"
                        }, width: "100%", border: "1px solid #F5F5F5"
                      }} onClick={() => {
                        setSearchName(name.user_Name);
                        setIsVisible({ nameVisible: false });
                        handledoctorNameSelect(name.id);
                      }}>

                        <Box sx={{ bgcolor: "#F5F5F5", p: .5, borderRadius: "100px", px: 1 }}>
                          <Search size={15} />
                        </Box>
                        <Box
                          style={{
                            padding: "10px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          <Typography sx={{ color: "black" }}>{name.user_Name}</Typography>
                        </Box>

                      </Box>

                    ))}

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

              <Box sx={{ backgroundColor: "#42A5F5", borderRadius: "0px 12px 12px 0", display: "flex", px: 2, py:2, alignItems: "center", color: "white", cursor: "pointer", }}>
                <Search />
                <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" } }}>Search</Typography>
              </Box>
            </Box>

          </Box>

       

        {/* Right Box */}

       
      </Box>

    </>


  )
}


export default SearchBtn;
