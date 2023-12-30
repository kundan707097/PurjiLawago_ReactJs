import React from "react";

function DepartmentCard(props){
    return(
        <>
            <div class="col-lg-4 col-md-6">
                <div class="single_department_section">
                    <div class="department_bg bg1">
                        <a href={props.link} tabIndex="-1">
                            <span class="LazyLoad is-visible">
                                <img src={props.imgsrc} alt="Period doubts or Pregnancy" class="card_img"/>
                            </span>
                        </a>
                    </div>
                    <h3>{props.department}</h3>
                    <p>{props.disc}</p>
                    <a href={props.link} class="department_readmore_btn">CONSULT NOW</a>
                </div> 
            </div>           
        </>
    )
}

export default DepartmentCard;