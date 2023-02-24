import React from 'react'

const colorPicket = (tipo) => {
  switch (tipo) {
    case "fire":
      return "#fd7d24"
    case "water":
      return "#4592c4"
    case "electric":
      return "#eed535"
    case "air":
    default:
      return "#3dc7ef";
  }
}

const Pokemon = ({ id, name, avatar, powerLevel, type }) => {
  return (
    <div
      style={{
        backgroundColor: `${colorPicket(type)}`,
        height:"350px",
        color: "white",
        borderRadius: '15px',
        marginBottom:'5px'
      }}
    >
      <p style={{textAlign:"center",fontFamily:"Verdana"}}>{name}</p>
      <img style={{width: "100%"}} src={avatar} alt={name} />
      <p style={{textAlign:"center",fontFamily:"Verdana"}}>Tipo:{type}</p>
      <p style={{textAlign:"center",fontFamily:"Verdana"}}>Poder: {powerLevel}</p>
     
    </div>
  )
}

export default Pokemon