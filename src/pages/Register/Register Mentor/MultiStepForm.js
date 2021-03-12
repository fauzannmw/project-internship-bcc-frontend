import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Navbar from "../../../components/Navbar/NavbarAuth";
import Account from "./stepForm/Account";
import Occupation from "./stepForm/Occupation";
import Address from "./stepForm/Address";
import Contact from "./stepForm/Contact";
import Submit from "./stepForm/Submit";

const defaultData = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  occupation: "",
  category: "",
  teachingMethod: "",
  address: "",
  about: "",
  cv: "",
  ads: "",
  price: "",
  phone: "",
  linkedin: "",
  picture: "",
};

const steps = [
  { id: "account" },
  { id: "occupation" },
  { id: "address" },
  { id: "contact" },
  { id: "submit" },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "account":
      return <Account {...props} />;
    case "occupation":
      return <Occupation {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  console.log(formData);

  return (
    <div>
      <h1>Register Mentor</h1>
    </div>
  );
};

export default MultiStepForm;
