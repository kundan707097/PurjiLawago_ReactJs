import React, { } from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleData from "../SectionTitleData";
import BookAppointmentCardData from "../appoitmentCardData";
import BookAppointmentCard from "./appoitmentCard";

function appointmentCard(val) {
    debugger;
    return (
        <BookAppointmentCard
            key={generateUniqueId()}
            imgsrc={val.imgsrc}
            department={val.departmentName}
            disc={val.disc}
            link={val.link}
        />
    );
}
function generateUniqueId(prefix = 'id') {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    return `${prefix}_${timestamp}_${randomNumber}`;
}

function BookAppointment() {
    return (
        <>
            <section className="section appointment_area spt0" data-scroll-index="2">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <SectionTitle
                                sectiontitle={SectionTitleData[1].sectionName}
                                disc={SectionTitleData[1].sectionDisc}
                                color={SectionTitleData[1].textColor}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div id="slider-appointment" className="owl-carousel">
                            {BookAppointmentCardData.map(appointmentCard)}
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}
export default BookAppointment;