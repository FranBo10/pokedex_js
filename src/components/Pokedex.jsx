import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      <div class="flex justify-center align-center p-3 text-3xl font-semibold">
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Loading, wait a few seconds...</div>
      ) : (
        <div
          class="flex flex-wrap
        "
        >
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
