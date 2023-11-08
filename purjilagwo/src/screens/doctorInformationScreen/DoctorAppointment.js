import React from 'react'
import '../../style/DoctorAppointment.css'

 function DoctorAppointment() {
  return (
    <>
    <div className="docApp-wrapper">
      <main>
        <h2>In-clinic appointment</h2>

        <div className="doc-card">
          <div className="main-left-col-wrapper">
            <div className="main-left-col">
              <div className="left-col">
                <div className="dp">
                  <img src="images/doc-1.jpg"/>
                </div>
              </div>

              <div className="right-col">
                <div className="doc-details">
                  <h3>Dr. Neelima Sharma</h3>
                  <p>MBBS, DNB - Dermatology, Venereology & Leprosy</p>
                  <p>Dermatologist, Cosmetologist</p>
                </div>

                <div className="hospital-details">
                  <h3>Manipal Hospital</h3>
                  <p>45/1, 45th Cross, Marenahalli Road, Phase II, Bangalore</p>
                  <a href="#">Get directions</a>
                </div>
              </div>
            </div>

            <div className="mobile-no">
              <h2>Enter your mobile number</h2>

              <form action="">
                <div className="input-row">
                  <p className="label">Mobile *</p>
                  <input type="tel" />
                  <div className="info">
                    <p>
                      You will receive an OTP shortly.
                    </p>
                    <p>
                      We will send appointment-related communications on this number.
                    </p>
                  </div>
                  <button>Continue</button>
                </div>
              </form>
            </div>
          </div>

          <div className="right-col-2">
            <div className="">
              <img src="images/calender.svg" alt="" />
              <p>On Nov 03, 2023</p>
            </div>

            <div className="">
              <img src="images/clock.svg" alt="" />
              <p>At 11:05 AM</p>              
            </div>

            <a href="">Change date and time</a>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
export default DoctorAppointment