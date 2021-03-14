import React from "react";
import MultiStepForm from "./MultiStepForm";
import StepContext from "./StepContext";

const RegisterMentor = () => {
  return (
    <div>
      <StepContext>
        <MultiStepForm />
      </StepContext>
    </div>
  );
};

export default RegisterMentor;
