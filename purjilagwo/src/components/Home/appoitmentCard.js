import React from "react";

function BookAppointmentCard(props){
    return(
        <>
            <div class="item">
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title"><a href={props.link}>{props.department}</a></h5>
                        <p class="card-text">{props.disc}</p>
                    </div>
                </div>
            </div>                     
        </>
    )
}

export default BookAppointmentCard;