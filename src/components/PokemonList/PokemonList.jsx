import React from "react";
import { pokemonTypeColors } from "../../utils/pokemonColors";
import "./PokemonList.css";
import Button from "../Button/Button";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-container">
      {pokemons.map((poke, index) => {
        const primaryType = poke.types[0].type.name;
        const shadowColor = pokemonTypeColors[primaryType] || "#cccccc";

        return (
          <div
            className="card-2"
            key={index}
            style={{ "--shadow-color": shadowColor }}
          >
            <div className="image-container">
              <img src={poke.sprites.front_default} alt={poke.name} />
            </div>
            <div>
              <h2>{poke.name}</h2>
              <h3>{`Pokedex Order: ${poke.order}`}</h3>
              <p>{`Type: ${poke.types.map((t) => t.type.name).join(", ")}`}</p>
              <div className="buttons">
                <Button
                  className={"button-card learn-more"}
                  to={`/pokemon/${poke.id}`}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
