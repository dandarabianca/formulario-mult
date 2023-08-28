import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import React from "react";
import "./Steps.css";

    const Steps = ({currentStep}) => {
    return (
        <div className="steps">
            <div className="step active">
                <AiOutlineUser />
            <span>Identificação</span>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineStar />
            <span>Avaliação</span>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FiSend />
            <span>Envio</span>
            </div>
        </div>
    )
}


export default Steps;