import React, { } from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleData from "../SectionTitleData";
import DepartmentCard from "../DepartmentCard";
import DepartmentCardData from "../DepartmentCardData";

function departmentCard(val){
    return(
        <DepartmentCard
            imgsrc={val.imgsrc}
            department={val.departmentName}
            disc={val.disc}                                
            link={val.link}
        />
    );
}

function Department(){
    return(
        <>
            <section class="section departments_area spt0" data-scroll-index="2">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8">
                            <SectionTitle                                
                                sectiontitle={SectionTitleData[0].sectionName}
                                disc={SectionTitleData[0].sectionDisc}
                                color={SectionTitleData[0].textColor}
                            />
                        </div>
                    </div>
                    <div class="row">                                                    
                        {DepartmentCardData.map(departmentCard)}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center"><button type="button" class="btn btn-outline-primary position-relative">View All Specialities</button></div>
                    </div>
                </div>
            </section>   
        </>
    )
}
export default Department;