import React from 'react'
import Login from './form-one/Login'
import Register from './form-two/Register'
import styled from "styled-components";
import { Container } from './styles/StyledComponents';

const App = () => {
  return (
    <Container content="evenly">
      <Login />
      <Register />
    </Container>
  )
}

export default App