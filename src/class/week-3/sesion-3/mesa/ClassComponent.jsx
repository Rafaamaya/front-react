import React, { Component } from "react";
import {
  Container,
  Text,
  ContainerCounter,
  Screen,
  Button,
} from "./style/ClassComponetStyle";

class ClassComponent extends Component {
  state = {
    contador: 23,
  };

  sumar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  restar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <Container>
        <Text>Class Counter</Text>
        <ContainerCounter>
          <Button onClick={this.sumar}>+</Button>
          <Screen>{this.state.contador}</Screen>
          <Button content="raigt" onClick={this.restar}>-</Button>
        </ContainerCounter>
      </Container>
    );
  }
}

export default ClassComponent;

// class CounterClass extends Component {
//     // constructor(props) {
//     //   super(props);
//     //   this.state = {
//     //     counterValue: this.props.value
//     //   }
//     // }
//     state = {
//       counterValue: this.props.value
//     };

//     operation = (param) => {
//       if (param === "minus") {
//         //this.setState({ counterValue: this.state.counterValue - 1 });
//         this.setState(prevState => ({ counterValue: prevState.counterValue - 1 }));
//       } else {
//         //this.setState({ counterValue: this.state.counterValue + 1 });
//         this.setState(prevValue => ({ counterValue: prevValue.counterValue + 1 }))
//       }
//     }

//     render() {
//       return (
//         <div>
//           <h1>Class Counter is:
//             {this.props.value} || {this.state.counterValue}
//           </h1>
//           <button onClick={() => this.operation("minus")}>Subtract</button>
//           <button onClick={() => this.operation("plus")}>Add</button>
//         </div>
//       )
//     };
//   };

//   export default CounterClass;
