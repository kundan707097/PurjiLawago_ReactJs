import React, { } from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleData from "../SectionTitleData";


function ServiceForYou(){
    return(
        <>  
            <section className="section service_area spt0">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <SectionTitle                                
                                sectiontitle={SectionTitleData[2].sectionName}
                                disc={SectionTitleData[2].sectionDisc}
                                color={SectionTitleData[2].textColor}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="d-flex align-items-center flex-xs-wrap descWrap">
                                <span className="d-flex align-items-center leftBnerImg"><img className="" src="images/doctor.png"/></span>
                                <p><strong className="d-block">Feeling unwell?</strong> Take an assessment in less than 3 min and get suggestions on what to do next <br/>
                                    <button type="button" className="btn btn-outline-primary mt-3">Get Started</button>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4" >
                                    <div className="processThumb">
                                        <img className="" src="images/medical.png"/>
                                        <span className="d-block">Enter <br/> Symtoms</span>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="processThumb">
                                        <img className="" src="images/healthcare.png"/>
                                        <span className="d-block">Understand <br/> Couse</span>                            
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="processThumb">
                                        <img className="" src="images/doctor.png"/>
                                        <span className="d-block">Book <br/> Consult</span>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="d-flex align-items-center flex-xs-wrap descWrap diabetesDesc">
                                <span className="d-flex align-items-center leftBnerImg"><img className="" src="images/diabetes_bnr.svg"/></span>
                                <p><strong className="d-block">Manage Diabetes with Us</strong> Track glucose value and get insights regularly <br/>
                                    <button type="button" className="btn btn-outline-primary mt-3">Start Now</button>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="processDiabetes">
                                <h2>How dose this work?</h2>
                                <ul>
                                    <li><span>1</span> Open Appolo247 aap home page</li>                        
                                    <li><span>3</span> Log in your glucose value</li>
                                    <li><span>2</span> Click on "Manage diatebes" under "Service for you" section</li>
                                    <li><span>4</span> Get regular insights to manage your conditions effectively</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}
export default ServiceForYou;