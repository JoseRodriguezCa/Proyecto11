import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../../../utils/ApiFetch";
import PokemonList from "../../PokemonList/PokemonList";
import Pagination from "../../Pagination/Pagination";
import "./Pokemon.css";
import Loader from "../../Loader/Loader";

const PrintPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fadeClass, setFadeClass] = useState("");
  const limit = 12;

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      try {
        const offset = (page - 1) * limit;
        const results = await fetchPokemons(offset, limit);
        setPokemon(results);
        setTotalPages(Math.ceil(1025 / limit));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [page]);

  return (
    <main className={`div-container ${fadeClass}`}>
      <h1>Pokédex</h1>
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <>
          <PokemonList pokemons={pokemon} />
          <Pagination 
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            setFadeClass={setFadeClass}
          />
        </>
      )}
    </main>
  );  
};

export default PrintPokemon;
