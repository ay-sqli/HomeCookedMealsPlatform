import React from "react";
import "./AboutCard.css"



export default function AboutCard(props) {

    return(

    <div className="Card">
        <img src={props.image} alt="Description"></img>
        <h3 className="text-red-400 font-semibold mt-16" >{props.titleContent}</h3>
        <p>{props.textContent}</p>
    </div>

    );
};
