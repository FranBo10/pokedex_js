import React from 'react'

const PokeNotFound = () => {

    const logImg = './pokeapi/src/images/poke-shadow.png'
    return (
      <div className="poke-card">
        <div>
          <p>Pokemon no encontrado</p>
        </div>
        <div>
          <div className="img-container">
            <img
              className="poke-img"
              src={logImg}
              alt="notFound"
            />
          </div>          
        </div>
      </div>
    );
  };
  
  export default PokeNotFound;