import Pokemon from "./Pokemon";
import dataPokemon from "../../../assets/static/pokemons.json";

function ListaPokemon() {
  const tipos = Object.keys(dataPokemon);

  return (
    <>
      <h1 style={{ textAlign: "center",fontFamily:"sans-serif" }}>Lista Pokemon</h1>
      {tipos.map((tipo) => (
        <div
          key={tipo}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "14px",
          }}
        >
          {dataPokemon[tipo].map((pokemon) => (
            <Pokemon key={pokemon.id} {...pokemon} rafa={tipo} />
          ))}
        </div>
      ))}
    </>
  );
}

export default ListaPokemon;
