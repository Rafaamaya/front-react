import React from 'react'
import { Container } from '../sesion-2/styles/StyledComponents';
import CounterFunction from './CounterFunction';
import CounterClass from './CounterClass';

const App = () => {
  return (
    <Container className='App' content="evenly">
      <CounterFunction value={5} />
      <CounterClass value={8} />
    </Container>
  )
}

export default App