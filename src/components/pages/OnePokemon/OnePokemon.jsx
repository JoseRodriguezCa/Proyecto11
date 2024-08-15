import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchPokemons from "../../../utils/ApiFetch";
import Loader from "../../Loader/Loader";
import PokemonCard from "../../PokemonCard/PokemonCard";
import "./OnePokemon.css";

const OnePokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);  // Nuevo estado para controlar la visibilidad

  useEffect(() => {
    const getPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemons(null, null, id);
        setPokemon(data[0]);
        setTimeout(() => {
          setIsVisible(true);  // Mostrar el contenido después de la carga
        }, 100);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, [id]);

  return (
    <div className={`pokemon-card-container ${isVisible ? 'visible' : ''}`}>
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {!loading && pokemon && (
        <PokemonCard pokemon={pokemon} />
      )}
    </div>
  );
};

export default OnePokemon;
