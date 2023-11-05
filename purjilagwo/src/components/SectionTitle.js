import React from "react";

function SectionTitle(props){
    return(
        <>
            <div class="section_title">
                <h2>{props.sectiontitle} <span>{props.color}</span></h2>
                <p>{props.disc}</p>
            </div>
        </>
    )
}

export default SectionTitle;