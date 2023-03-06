import React from "react";
import { useState } from "react";
import {
  Container,
  Text,
  ContainerCounter,
  Screen,
  Button,
} from "./style/ClassComponetStyle";

const FunctionCounter = () => {
  const [contador, setContador] = useState(23);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <Container>
      <Text>Function Counter</Text>
      <ContainerCounter>
        <Button onClick={sumar}>+</Button>
        <Screen>{contador}</Screen>
        <Button content="raigt" onClick={restar}>-</Button>
      </ContainerCounter>
    </Container>
  );
};

export default FunctionCounter;
