import React from 'react'
import './App.css'
import { useEffect, useState } from "react";
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import {SearchPokemon, getPokemonData, getPokemons} from './components/Api'
import Pokedex from './components/Pokedex'
import PokeNotFound from './components/PokeNotFound'

function App() { 
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await SearchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
    }
    setLoading(false)

  }

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
        {notFound ? (
          <PokeNotFound />
        ) : 
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          
        />)}
      
    </div>
    
  )
}

export default App
