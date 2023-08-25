
import React from "react";
import "./Steps.css";

    const Steps = ({currentStep}) => {
    return (
        <div className="steps">
            <div className="step active">
            <span>Identificação</span>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <span>Avaliação</span>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <span>Envio</span>
            </div>
        </div>
    )
}


export default Steps;