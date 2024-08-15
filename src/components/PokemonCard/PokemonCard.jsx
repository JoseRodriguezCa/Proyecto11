import React from 'react';
import { pokemonTypeColors } from '../../utils/pokemonColors';
import './PokemonCard.css';
import Button from '../Button/Button';

const PokemonCard = ({ pokemon }) => {

  const primaryType = pokemon.types[0].type.name;
  const shadowColor = pokemonTypeColors[primaryType] || "#cccccc";

  return (

    <div 
      className="card-2" 
      style={{ "--shadow-color": shadowColor }}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <div>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <h3 className="pokemon-id">#{pokemon.id}</h3>
        <p><strong>Type:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        <div className="pokemon-stats">
          <h3>Base Stats</h3>
          <ul>
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                <span>{stat.stat.name.toUpperCase()}: </span>
                <span>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
                  className={"button-card learn-more pokemon-card"}
                  to={`/`}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Back to List</span>
                </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
