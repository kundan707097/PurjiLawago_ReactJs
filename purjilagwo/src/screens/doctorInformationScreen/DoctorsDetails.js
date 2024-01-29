import React, { useState, useEffect } from 'react'
import '../../style/DoctorsDetails.css'
import { useParams } from 'react-router-dom';
import DoctorService from '../../services/Doctor.services';


export default function Doctor() {
  const [activeTab, setActiveTab] = useState(1);
  const [doctorData, setDoctorData] = useState(null);


  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const response = await DoctorService.DoctorInformation(id);
          if(response!==undefined){
            setDoctorData(response);
          }
        } catch (error) {
          console.error(`Error fetching doctor information: ${error.message}`);
        }
      }
      
      // Add any logic here that needs to use the ID
      // For example, you can fetch data based on the ID
    })();
  }, [id]);
  console.log("doctorInformation",doctorData);

 

  return (
    <>
      {doctorData !== null ? (
      <div className="doctor-wrapper">
        <div className="doc-flex">
          <div className="main-col">
            <main>
              <div className="doc-row">
                <div className="doc-col-1">
                  <div className="doc-img">
                    <img src="../../images/doc-1.jpg"></img>
                  </div>
                </div>
                <div className="doc-col-2">
                  <div className="text-content">
                    <h2 className="doc-name">{doctorData?.user_Name} </h2>
                    <p className="doc-details">{doctorData?.education}</p>
                    <p className="doc-exp">24 Years Experience Overall  (17 years as specialist)</p>
                    <p className="doc-desc">{doctorData?.description} </p>
                  </div>

                  <div className="icon-content">
                    <div className="icon-1">
                      <img src="../../images/verified.svg" />
                      <p>Medical Registration Verified</p>
                    </div>

                    <div className="icon-2">
                      <img src="../../images/thumbsup.svg" />
                      <p>95%</p>
                    </div>
                  </div>

                  {/* Appointment block for responsive screens  */}
                  <div className="mobile-appointment">
                    <div className="wrapper">
                      <h2>Pick a time slot</h2>
                      <div className="sb-container">
                        <h3>Book an appointment for Consultation</h3>

                        <div className="day-nav">
                          <div className="left-arrow arrow"></div>

                          <div className="active">
                            <p>Today</p>
                            <p>8 slot available</p>
                          </div>

                          <div className="">
                            <p>Tomorrow</p>
                            <p>8 slot available</p>
                          </div>

                          <div className="">
                            <p>Thu, 2 Nov</p>
                            <p>8 slot available</p>
                          </div>

                          <div className="right-arrow arrow"></div>
                        </div>

                        <h6>Evening</h6>
                        <div className="slot-container">
                          <div className="slot">06:00 PM</div>
                          <div className="slot">06:15 PM</div>
                          <div className="slot">06:30 PM</div>
                          <div className="slot">06:45 PM</div>
                          <div className="slot">07:00 PM</div>
                          <div className="slot">07:15 PM</div>
                          <div className="slot">07:30 PM</div>
                          <div className="slot">07:45 PM</div>
                          <div className="slot">08:00 PM</div>
                          <div className="slot">08:15 PM</div>
                        </div>

                        <p className="add-info">
                          After you have submitted the appointment request, we might call to confirm the preferred appointment slot.
                        </p>

                        <div className="doc-add">
                          <div>
                            <p>Manipal Hospital</p>
                            <p>Jayanagar 9 block</p>
                          </div>

                          <div>
                            <p>₹ 650</p>
                            <p>Max 30min wait time</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <div className="block-1">
              <ul className="block1-nav">
                <li className={activeTab === 1 ? 'active' : ''}><a onClick={() => handleTabClick(1)}>Info</a></li>
                <li className={activeTab === 2 ? 'active' : ''}><a onClick={() => handleTabClick(2)}>Stories(27)</a></li>
                <li className={activeTab === 3 ? 'active' : ''}><a onClick={() => handleTabClick(3)}>Consult Q&A</a></li>
              </ul>

              <div class="block1-wrapper">
                <div className="info-tab" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                  <div className="info-tab-container">
                    <div class="add-col">
                      <div className="title-row">
                        <img src="../images/address.svg" />
                        <h3>Address</h3>
                      </div>
                      <p className="hospital-name fw-m">Manipal Hospital</p>
                      <p>{doctorData?.doctor_Address}</p>
                    </div>

                    <div className="time-col">
                      <div className="time-container">
                        <div className="title-row">
                          <img src="../images/timing.svg" />
                          <h3>Timing</h3>
                        </div>
                        <p className="days days-1 fw-m">Mon, Fri</p>
                        <p>{doctorData?.doctorsTimeAvailability}</p>
                        <p className="days days-2 fw-m">Tue - Thu, Sat</p>
                        <p>06:00 PM - 08:00 PM</p>
                      </div>
                    </div>

                    <div className="price-col">
                      <div className="title-row">
                        <h3>Consultation Fee</h3>
                      </div>
                      <p className="fees">₹ 650</p>
                      <div className="prime-row">
                        <p className="prime fw-m">Prime</p>
                        <div className="tick"></div>
                      </div>
                      <p>Max. 30 mins wait + Verified details</p>
                    </div>
                  </div>

                  <div className="btn-container">
                    <button>Book Appointment</button>
                    <p>No booking fees</p>
                  </div>
                </div>

                <div className="stories-tab" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                  <h2>Patient stories for {doctorData?.user_Name}</h2>
                  <p className="desc">These are patient’s opinions and do not necessarily reflect the doctor’s medical capabilities. <a href="#">Read more</a></p>

                  <div className="topbar">
                    <p>27 Stories</p>
                    <div className="sorting-options">
                      <label for="cars">Sort by:</label>

                      <select name="sort" id="sort-by">
                        <option value="recent">Recent</option>
                        <option value="Most helpful">Most Helpful</option>
                      </select>
                    </div>
                  </div>

                  <div className="story">
                    <div className="col-dp">
                      <div className="dp">A</div>
                    </div>

                    <div className="col-story">
                      <div className="name-row">
                        <p className="name">Adanoor Residency</p>
                        <img src="../images/verified-user.svg" className="verified-user" />
                      </div>
                      <p className="time">3 years ago</p>
                      <p className="story-content">
                        Due to allergic condition of the scalp, I wanted to consult the best dermatologist. That is when I found {doctorData?.user_Name} through Practo. I am extremely gratified with her consultation. The given treatment was a great relief. After a deep analysis, she explained the condition evidently. She has given the follow-up date as well. I will definitely continue my further treatment with her.
                      </p>

                      <div className="recommending-doc">
                        <p>I recommend the doctor</p>
                        <img src="../images/thumbsup.svg" />
                      </div>
                    </div>

                    <img src="../images/quote-right.svg" />
                  </div>

                  <div className="story">
                    <div className="col-dp">
                      <div className="dp">S</div>
                    </div>

                    <div className="col-story">
                      <div className="name-row">
                        <p className="name">Sakshi Sharma</p>
                        <img src="../images/verified-user.svg" className="verified-user" />
                      </div>
                      <p className="time">1 month ago</p>
                      <p className="story-content">
                        After completing three of my sessions, things are going well. I am happy about the progressive treatment. {doctorData?.user_Name}  is very considerate. She has given all the needful advice. But the waiting period is really bothersome. My consultation has been delayed for an hour sometimes. If the schedules can be arranged carefully, this might be avoided. Otherwise, everything is perfect.
                      </p>

                      <div className="recommending-doc">
                        <p>I do not recommend the doctor</p>
                        <img src="../images/thumbsup.svg" className="donot-recomm" />
                      </div>
                    </div>

                    <img src="../images/quote-right.svg" />
                  </div>

                  <div className="story">
                    <div className="col-dp">
                      <div className="dp">A</div>
                    </div>

                    <div className="col-story">
                      <div className="name-row">
                        <p className="name">Adanoor Residency</p>
                        <img src="../images/verified-user.svg" className="verified-user" />
                      </div>
                      <p className="time">3 years ago</p>
                      <p className="story-content">
                        Due to allergic condition of the scalp, I wanted to consult the best dermatologist. That is when I found {doctorData?.user_Name}  through Practo. I am extremely gratified with her consultation. The given treatment was a great relief. After a deep analysis, she explained the condition evidently. She has given the follow-up date as well. I will definitely continue my further treatment with her.
                      </p>

                      <div className="recommending-doc">
                        <p>I recommend the doctor</p>
                        <img src="../images/thumbsup.svg" />
                      </div>
                    </div>

                    <img src="../images/quote-right.svg" />
                  </div>

                  <div className="story">
                    <div className="col-dp">
                      <div className="dp">S</div>
                    </div>

                    <div className="col-story">
                      <div className="name-row">
                        <p className="name">Sakshi Sharma</p>
                        <img src="../images/verified-user.svg" className="verified-user" />
                      </div>
                      <p className="time">1 month ago</p>
                      <p className="story-content">
                        After completing three of my sessions, things are going well. I am happy about the progressive treatment. {doctorData?.user_Name}  is very considerate. She has given all the needful advice. But the waiting period is really bothersome. My consultation has been delayed for an hour sometimes. If the schedules can be arranged carefully, this might be avoided. Otherwise, everything is perfect.
                      </p>

                      <div className="recommending-doc">
                        <p>I do not recommend the doctor</p>
                        <img src="../images/thumbsup.svg" className="donot-recomm" />
                      </div>
                    </div>

                    <img src="../images/quote-right.svg" />
                  </div>
                </div>

                <div className="qna-tab" style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                  <div className="topbar">
                    <h3>Common question & answers</h3>
                  </div>

                  <div className="qna-container">
                    <div className="qna">
                      <p className="question">Q: Where does {doctorData?.user_Name}  practice?</p>
                      <p className="answer"><span class="fw-b">A: </span>{doctorData?.user_Name}   practices at Manipal Hospital - Jayanagar 9 Block</p>
                    </div>

                    <div className="qna">
                      <p className="question">Q: How can I take {doctorData?.user_Name} appointment?</p>
                      <p className="answer"><span class="fw-b">A: </span>You can take <a href="javascript:void(0)">{doctorData?.user_Name}</a> appointment online through Practo for in-clinic visit with the doctor.</p>
                    </div>

                    <div className="qna">
                      <p className="question">Q: Why do patients visit {doctorData?.user_Name}?</p>
                      <p className="answer"><span class="fw-b">A: </span>Patients frequently visit {doctorData?.user_Name}  for PRP Hair Transplantation, Hair Weaving & Bonding, Sun Burn Treatment. To see more reasons visit the <a href="javascript:void(0)">doctor's profile</a> on Practo.</p>
                    </div>

                    <div className="qna">
                      <p className="question">Q: What do patients say about {doctorData?.user_Name}?</p>
                      <p className="answer"><span class="fw-b">A: </span>{doctorData?.user_Name} has been recommended by 74 patients and has recieved stories from 27 patients. You can <a href="javascript:void(0)">read detailed patient stories</a> of the doctor on Practo.</p>
                    </div>

                    <div className="qna">
                      <p className="question">Q: What is {doctorData?.user_Name} education qualification?</p>
                      <p className="answer"><span class="fw-b">A: </span>{doctorData?.user_Name} has the following qualifications - MBBS, DNB - Dermatology, Venereology & Leprosy. You can <a href="javascript:void(0)">book the doctor</a> through the doctor's profile on Practo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-2">
              <div className="block2-container1">
                <div className="titlebar">
                  <h3>Services</h3>
                  <a href="">View all (68)</a>
                </div>

                <ul>
                  <li>PRP Hair Transplantation</li>
                  <li>Cheek Augmentation</li>
                  <li>keloid/scar treatment</li>
                  <li>Syphilis Treatment</li>
                  <li>Leprosy Treatment/Rehab</li>

                  <li>Hair Weaving & Bonding</li>
                  <li>Thread Lift</li>
                  <li>Bacterial Skin Infection Treatment</li>
                  <li>Gonorrhea Treatment</li>
                  <li>Chemical Peel</li>

                  <li>Sun Burn Treatment</li>
                  <li>Anti Aging Treatment</li>
                  <li>Melanoma Treatment</li>
                  <li>Glutathione - Skin Whitening</li>
                  <li>Skin Polishing</li>
                </ul>
              </div>

              <div className="block2-container2">
                <div className="ul-wrapper">
                  <div className="titlebar">
                    <h3>Specializations</h3>
                  </div>

                  <ul>
                    <li>Dermatologist</li>
                    <li>Cosmetologist</li>
                  </ul>
                </div>

                <div className="ul-wrapper">
                  <div className="titlebar">
                    <h3>Awards and Recognitions</h3>
                  </div>
                  <ul>
                    <li>Asia-pacific at the L`Oreal Social Responsibility Awards in Dermatology</li>
                    <li>World Congress of Dermatology, Vancouver, Canada, June 2015</li>
                    <li>IADVL-KT Community Dermatology Award</li>
                  </ul>
                </div>
              </div>

              <div className="block2-container3">
                <div className="ul-wrapper">
                  <div className="titlebar">
                    <h3>Education</h3>
                  </div>

                  <ul>
                    <li>{doctorData?.education}</li>
                  </ul>
                </div>

                <div className="ul-wrapper">
                  <div className="titlebar">
                    <h3>Memberships</h3>
                    <a >View all (9)</a>
                  </div>
                  <ul>
                    <li>Karnataka Medical Council</li>
                    <li>ife Member, Indian Association of Dermatologists, Venereologists and Leprologists</li>
                    <li>Life Member, Geriatric Society of India</li>
                    <li>EC Member, Bangalore Dermatology Society, India</li>
                    <li>National Advisor, First Conference on Community Dermatology. Rajahmundry, AP. 2nd August, 2015</li>
                  </ul>
                </div>
              </div>

              <div className="block2-container4">
                <div className="ul-wrapper">
                  <div className="titlebar">
                    <h3>Experience</h3>
                  </div>

                  <ul>
                    <li>2003 - 2003 Consultant dermatologist at HDeepti Nursing Home</li>
                    <li>2004 - 2005 Senior resident/tutor at Skin Institute and School of Dermatology</li>
                    <li>2009 - 2009 Consultant dermatologist at Kaya Skin Clinic</li>
                    <li>2011 - 2013 Medical Superintendent and Consultant Dermatologist at Hairline International Hair and Skin Clinic</li>
                  </ul>
                </div>

                <div className="ul-wrapper">
                  <div className="titlebar">
                    <h3>Registrations</h3>
                  </div>
                  <ul>
                    <li>53039 Karnataka Medical Council, 1999</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="wrapper">
              <h2>Pick a time slot</h2>
              <div className="sb-container">
                <h3>Book an appointment for Consultation</h3>

                    <div className="day-nav">
                      <div className="left-arrow arrow"></div>
                      {/* {renderDateSlots()} */}
                      <div className="active">
                        <p>Today</p>
                        <p>8 slot available</p>
                      </div>

                      <div className="">
                        <p>Tomorrow</p>
                        <p>8 slot available</p>
                      </div>

                      <div className="">
                        <p>Thu, 2 Nov</p>
                        <p>8 slot available</p>
                      </div>
                      <div className="">
                        <p>Thu, 3 Nov</p>
                        <p>8 slot available</p>
                      </div>
                      <div className="">
                        <p>Thu, 4 Nov</p>
                        <p>8 slot available</p>
                      </div>

                      <div className="right-arrow arrow"></div>
                    </div>

                    <h6>Evening</h6>
                    <div className="slot-container">
                      <div className="slot">06:00 PM</div>
                      <div className="slot">06:15 PM</div>
                      <div className="slot">06:30 PM</div>
                      <div className="slot">06:45 PM</div>
                      <div className="slot">07:00 PM</div>
                      <div className="slot">07:15 PM</div>
                      <div className="slot">07:30 PM</div>
                      <div className="slot">07:45 PM</div>
                      <div className="slot">08:00 PM</div>
                      <div className="slot">08:15 PM</div>
                    </div>

                <p className="add-info">
                  After you have submitted the appointment request, we might call to confirm the preferred appointment slot.
                </p>

                <div className="doc-add">
                  <div>
                    <p>Manipal Hospital</p>
                    <p>Jayanagar 9 block</p>
                  </div>

                  <div>
                    <p>₹ 650</p>
                    <p>Max 30min wait time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       ) : (
        // Render content when data is not available
        <div>
          <p>No data found.</p>
        </div>
      )}

    </>
  )
}