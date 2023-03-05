import React from 'react'
import { FormContainer, Container } from '../styles/StyledComponents'
import { CustomInput } from '../common/CustomInput'
const Login = () => {
  const tipo = ["Email", "Password"];
  return (
    <FormContainer
      from="login"
    >
      {tipo.map((element) => (
        <CustomInput key={element} name={element} />
      ))}
    </FormContainer>
  )
}

export default Login