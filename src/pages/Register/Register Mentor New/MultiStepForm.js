import React, {Component, useContext} from "react";
import { useForm, useStep } from "react-hooks-helper";
import Account from "./stepForm/Account";
import Occupation from "./stepForm/Occupation";
import Address from "./stepForm/Address";
import Contact from "./stepForm/Contact";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import Navbar from "./../../../components/Navbar/NavbarMentor";
import { multiStepContext } from "./StepContext";

const MultiStepForm = () => {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Occupation />;
      case 3:
        return <Address />;
      case 4:
        return <Contact />;
    }
  }

  return (
    <div>
      <Navbar />
      <header className="App-header">
        <h1>Register Mentor</h1>
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </header>
    </div>
  );
};

export default MultiStepForm;
