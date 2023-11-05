import React, { } from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleData from "../SectionTitleData";
import BookAppointmentCardData from "../appoitmentCardData";
import BookAppointmentCard from "./appoitmentCard";

function appointmentCard(val){
    return(
        <BookAppointmentCard
            imgsrc={val.imgsrc}
            department={val.departmentName}
            disc={val.disc}
            link={val.link}
        />
    );
}

function BookAppointment(){
    return(
        <>            
            <section class="section appointment_area spt0" data-scroll-index="2">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8">
                            <SectionTitle                                
                                sectiontitle={SectionTitleData[1].sectionName}
                                disc={SectionTitleData[1].sectionDisc}
                                color={SectionTitleData[1].textColor}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div id="slider-appointment" class="owl-carousel">
                            {BookAppointmentCardData.map(appointmentCard)}
                        </div>
                        
                        
                    </div>
                    
                </div>
            </section>   
        </>
    )
}
export default BookAppointment;