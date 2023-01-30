import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div class="p-2 mx-auto">
      <div class="border-2 border-slate-500 rounded-md align-center p-2 mx-auto w-72 shadow-xl bg-white min-h-full">
        <div>
          <p class="flex justify-center font-semibold text-lg mb-2">
            {pokemon.name.toUpperCase()}
          </p>
        </div>
        <div>
          <div class="flex justify-center">
            <img
              class=" w-48 border-2 border-black rounded-full"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </div>
          <div class="flex justify-center font-semibold">N° {pokemon.id}</div>
          <div>
            {pokemon.types.map((type, index) => {
              return (
                <div
                  class="flex justify-center p-1 m-2 border-dashed border-2 border-slate-400 font-semibold"
                  key={index}
                >
                  {type.type.name.toUpperCase()}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div class="border-2 border-black">
            <div class="flex flex-col p-2 bg-slate-400 font-semibold">
              <div class="flex justify-between">
                <div>HEIGHT</div>
                <div>{pokemon.height}0 cm</div>
              </div>
              <div class="flex justify-between">
                <div>WEIGHT</div>
                <div>{pokemon.weight} lbs</div>
              </div>
            </div>
            <div class="bg-slate-600 text-white p-2">
              <div class="flex justify-between">
                <div>
                  {pokemon.stats.map((stats, index) => (
                    <div>
                      <div key={index}>{stats.stat.name.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {pokemon.stats.map((stats, index) => (
                    <div>
                      <div key={index}>{stats.base_stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
