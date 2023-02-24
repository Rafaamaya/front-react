import pokemonData from "../../../assets/static/pokemons.json"
import Pokemon from "./Pokemon";

const Lista = ({ type }) => {
  const data = pokemonData[type];
  data.map(pokemon => (
    console.log(pokemon)
  ))
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px",justifyContent:"center" }}>
        {
          data.map(pokemon => (
            <Pokemon
              key={pokemon.id}
              {...pokemon}
              type={type}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Lista;