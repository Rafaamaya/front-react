import React from 'react'
import { Container } from './style/AppStyled';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';



const App = () => {
  return (
    <Container className='App' content="evenly">
      <ClassComponent/>
      <FunctionComponent/>
    </Container>
  )
}

export default App