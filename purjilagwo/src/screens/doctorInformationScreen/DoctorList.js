import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DoctorList() {
  const { location } = useParams();
  const [doctors, setDoctors] = useState([]);
debugger;
  useEffect(() => {
    fetch(`https://localhost:44324/DoctorsInformation/Location?filterBasedOnLocation=${location}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setDoctors(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch((error) => {
      debugger;
      console.error('Error fetching doctors:', error)
  });
  }, [location]);

  return (
    <div>
      <h1>Doctors in {location}</h1>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div className="doctor-box" key={doctor.id}>
            <div>
              <strong>{doctor.first_Name} {doctor.last_Name}</strong>
              <p>RemarkArea: {doctor.remarkArea}</p>
              <p>Education: {doctor.education}</p>
              <p>City: {doctor.city}</p>
              {/* Additional Doctor Information */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
