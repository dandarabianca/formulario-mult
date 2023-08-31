import React from "react";
import "./styles.css";
import Steps from "../Steps";

export default function Formulario({
  changeStep,
  currentStep,
  currentComponents,
  isLastStep,
  isFirsStep,
}) {
  return (
    <div className="form-container">
      <Steps currentStep={currentStep}/>

      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-conteiner">{currentComponents}</div>
        <div className="actions">
          {!isFirsStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>Voltar</span>
            </button>
          )}
          {!isLastStep ? (
            <button type="submit">
              <span>Avançar</span>
            </button>
          ) : (
            <button type="button">
              <span>Enviar</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
