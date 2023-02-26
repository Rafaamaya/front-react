function Pokemon(props) {
  const colorPicket = (tipo) => {
    switch (tipo) {
      case "fire":
        return "#fd7d24";
      case "water":
        return "#4592c4";
      case "electric":
        return "#eed535";
      case "air":
      default:
        return "#3dc7ef";
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: colorPicket(props.rafa),
          width: "300px",
          color: "white",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "sans-serif", fontSize:"25px"}}>{props.name.toUpperCase()}</p>
        <img src={props.avatar} alt={props.name} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            backgroundColor: "#969696",
            borderRadius: "15px",
            margin: "15px",
          }}
        >
          <p style={{ fontFamily: "sans-serif", fontSize:"18px" }}>Nivel: {props.powerLevel}</p>
          <p style={{ fontFamily: "sans-serif",fontSize:"18px" }}>Tipo: {props.rafa}</p>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
