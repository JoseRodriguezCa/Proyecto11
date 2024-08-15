export const fetchPokemons = async (offset = null, limit = null, id = null) => {
  const pokemonData = [];

  try {
    if (id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      pokemonData.push(data);
    } else {
      for (let i = offset + 1; i <= offset + limit; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if(res.ok){
          const data = await res.json();
          if (data) pokemonData.push(data);
        }
      }
    }

    return pokemonData;
  } catch (error) {
    console.error('Error fetching the Pokémon(s):', error);
  }
};

export default fetchPokemons;
