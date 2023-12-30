import React, { } from "react";
import Card from "../Card";
import ServicesData from "../ServicesData";

function servicesCard(val) {
    return (
        <Card
            key={generateUniqueId()}
            imgsrc={val.imgsrc}
            servicetitle={val.serviceName}
            disc={val.serviceDisc}
            link={val.link}
        />
    );
}

function generateUniqueId(prefix = 'id') {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    return `${prefix}_${timestamp}_${randomNumber}`;
}


function Services() {
    return (
        <>
            <section className="section offring_slider_wrapper spt0">
                <div className="container">
                    <div className="row">
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