import SidebarNav from "../../../components/SidebarNav/SidebarNav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { EventData } from "../../events/type";
import { useNavigate } from "react-router-dom";
const InformalCard = (props) => {

    const navigate = useNavigate();



    const handleClick = () => {
        navigate(`/event/${props.game.id}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // console.log(data.Quizzing);
    return (
        <>

            <div className="info-card" onClick={handleClick} >
                
                <img className="" src={props.game.poster} alt="event" />
                

            </div>


        </>
    );


};

export default InformalCard;