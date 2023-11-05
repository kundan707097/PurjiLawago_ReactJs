import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

function DoctorsDetails() {
  const navigate = useNavigate(); // Initialize the navigate function
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch doctor details using the ID from the API
    fetch(`https://localhost:44324/DoctorsInformation/${id}`)
      .then((response) => response.json())
      .then((data) => setDoctor(data))
      .catch((error) => console.error('Error fetching doctor information:', error));
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h>
        this is the Doctors Information pages.
      </h>
      <h1>{doctor.first_Name} {doctor.last_Name}</h1>
      <p>Speciality: {doctor.speciality}</p>
      {/* Add more doctor details here */}
    </div>
  );
}

export default DoctorsDetails;
