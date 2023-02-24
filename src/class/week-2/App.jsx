import React, { Component } from "react";
import Lista from "./sesion/Lista";


export const App = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",fontFamily:"Verdana"}}>Pokemon</h1>
      <Lista type="air" />
      <Lista type="fire" />
      <Lista type="water" />
      <Lista type="electric" />
    </div>
  )
}