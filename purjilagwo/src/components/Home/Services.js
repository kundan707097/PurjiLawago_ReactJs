import React, { } from "react";
import Card from "../Card";
import ServicesData from "../ServicesData";

function servicesCard(val){
    return(
        <Card
            imgsrc={val.imgsrc}
            servicetitle={val.serviceName}
            disc={val.serviceDisc}
            link={val.link}
        />
    );
}

function Services(){
    return(
        <>
            <section className="section offring_slider_wrapper spt0">
                <div className="container">
                    <div class="row">
                        <div id="slider-carousel" className="owl-carousel">
                            {ServicesData.map(servicesCard)}                            
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}
export default Services;