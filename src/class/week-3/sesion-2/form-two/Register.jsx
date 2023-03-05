import React from "react";
import { CustomInput } from "../common/CustomInput";
import { FormContainer, Container } from "../styles/StyledComponents";

const Register = () => {
  const tipo = ["Name", "Email", "Password", "Repeat Password"];

  return (
    <FormContainer
    >
      {tipo.map((element) => (
        <CustomInput key={element} name={element} />
      ))}
    </FormContainer>
  );
};

export default Register;
