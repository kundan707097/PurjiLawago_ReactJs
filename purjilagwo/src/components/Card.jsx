import React from "react";

function Card(props){
    return(
        <>
            <div className="item">
                <div className="team_about">
                    <div className="team_img">
                        <a href={props.link}><img src={props.imgsrc} alt="img" className="img-responsive"/></a>
                    </div>
                    <div className="offer_txt">
                        <h1><a href={props.link}>{props.servicetitle}</a></h1>
                        <p>{props.disc}</p>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Card;