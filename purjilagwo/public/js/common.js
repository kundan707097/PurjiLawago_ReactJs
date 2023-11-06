$(document).ready(function() {

  let doctorNames = []; // Define an array to store doctor names

function fetchDoctorInformation(searchTerm) {
  fetch("https://localhost:44324/DoctorsInformation")
    .then(response => response.json())
    .then(data => {
      // Check if the data is an array and not empty
      if (Array.isArray(data) && data.length > 0) {
        // Extract the 'first_Name', 'last_Name', and 'speciality' properties from each object in the API response
        doctorNames = data.map(doctor => ({
          fullName: `${doctor.first_Name} ${doctor.last_Name}`,
          speciality: doctor.speciality,
          id: doctor.id,
        }));

        // Filter data based on user's input and limit results to the first 10 records
        const filteredData = doctorNames.filter(doctor => {
          return (
            doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
            searchTerm.length >= 2
          );
        }).slice(0, 10);

        // If at least two characters are entered, provide suggestions
        if (searchTerm.length >= 2) {
          $("#doctorsName").autocomplete({
            source: function(request, response) {
              const suggestions = filteredData.map(doctor => ({
                label: `${doctor.fullName} - ${doctor.speciality}`,
                value: doctor.fullName,
                id: doctor.id, 
              }));
              response(suggestions);
            },
            select: function (event, ui) {
              // When a suggestion is selected, navigate to the doctor details page
              window.location.href = `/doctorsdetails/${ui.item.id}`;
            },
          });
        } else {
          // If less than two characters are entered, clear suggestions
          $("#doctorsName").autocomplete("destroy");
        }
      }
    })
    .catch(error => {
      console.error("Error fetching doctor information:", error);
    });
}


// Function to fetch location information
let autocompleteInitialized = false;
let locationData = new Set();

function initializeAutocomplete(uniqueData) {
  $("#searchLocation").autocomplete({
    source: uniqueData,
    select: function (event, ui) {
      //const selectedLocation = ui.item.value;
      // Navigate to the new page and pass the location information
      //window.location.href = `/doctorlist?location=${selectedLocation}`;
      const selectedLocation = ui.item.value;
      window.location.href = `/doctorlist/${selectedLocation}`;
    },
  });
  autocompleteInitialized = true;
}

function destroyAutocomplete() {
  if (autocompleteInitialized) {
    $("#searchLocation").autocomplete("destroy");
    autocompleteInitialized = false;
  }
}

function fetchLocationInformation(searchLocation) {
  // You can replace this URL with the actual endpoint for location data
  fetch("https://localhost:44324/DoctorsInformation")
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        locationData.clear();

        data.forEach((location) => {
          const formattedLocation = {
            id: location.id,
            value: location.city,
          };
          locationData.add(JSON.stringify(formattedLocation));
        });

        const formattedData = Array.from(locationData).map((location) =>
          JSON.parse(location)
        );

        const filteredData = formattedData.filter((location) => {
          return (
            location.value.toLowerCase().includes(searchLocation.toLowerCase()) &&
            searchLocation.length >= 2
          );
        }).slice(0, 10);

        if (searchLocation.length >= 2) {
          if (!autocompleteInitialized) {
            initializeAutocomplete(filteredData);
          } else {
            $("#searchLocation").autocomplete("option", "source", filteredData);
          }
        } else {
          destroyAutocomplete();
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching location information:", error);
    });
}

// Event listener for input changes in the location input field
$("#searchLocation").on("input", function() {
  const searchLocation = $(this).val();
  fetchLocationInformation(searchLocation);
});




$("#doctorsName").on("input", function() {
  const searchTerm = $(this).val();
  fetchDoctorInformation(searchTerm);
});


    const owl = $("#slider-carousel");
    owl.owlCarousel({
      items: 2,
      margin: 10,
      dots: true,
      itemsDesktop: [1200, 5],
      itemsDesktopSmall: [991, 3],
      itemsTablet: [600, 2],
      itemsMobile: false,
      //pagination: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        991: {
          items: 3
        },
        1200: {
          items: 5
        }
      }
    }); 
    
    const appointment = $("#slider-appointment");
    appointment.owlCarousel({
      items: 4,
      margin: 15,
      dots: true,
      itemsDesktop: [1000, 5],
      itemsDesktopSmall: [900, 2],
      itemsTablet: [600, 1],
      itemsMobile: false,
      //pagination: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        991: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    }); 
    //const goTopBtn = document.querySelector('.back_to_top');
    // Back to Top button
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    const goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    if (goTopBtn) {
      goTopBtn.addEventListener('click', backToTop);
    }
  });