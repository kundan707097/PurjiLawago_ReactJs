import React, { } from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleData from "../SectionTitleData";
import DepartmentCard from "../DepartmentCard";
import DepartmentCardData from "../DepartmentCardData";

function departmentCard(val) {
    return (
        <DepartmentCard
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


function Department() {
    return (
        <>
            <section className="section departments_area spt0" data-scroll-index="2">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <SectionTitle
                                sectiontitle={SectionTitleData[0].sectionName}
                                disc={SectionTitleData[0].sectionDisc}
                                color={SectionTitleData[0].textColor}
                            />
                        </div>
                    </div>
                    <div className="row">
                        {DepartmentCardData.map(departmentCard)}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center"><button type="button" className="btn btn-outline-primary position-relative">View All Specialities</button></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Department;