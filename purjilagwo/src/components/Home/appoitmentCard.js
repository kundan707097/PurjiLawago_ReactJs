import React from "react";

function BookAppointmentCard(props){
    debugger;
    return(
        <>
            <div className="item">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title"><a href={props.link}>{props.department}</a></h5>
                        <p className="card-text">{props.disc}</p>
                    </div>
                </div>
            </div>                     
        </>
    )
}

export default BookAppointmentCard;