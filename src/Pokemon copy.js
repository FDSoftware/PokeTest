/*eslint-disable no-unused-vars */
import React, { Component, PropTypes, useEffect } from 'react'


const Pokemon = ({ value, onIncrement, onDecrement , GETPK}) =>{
  useEffect(() => {
    onIncrement();
  },[]);

  return(
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Numero de pagina: {value.getState().pag} {console.log(value.getState())}
        </div>
        <div>
          <ul>
          {
              value.getState().pokemons.map(
                  (pk, index) =>{
                    return <li key={index}>Nombre: {pk.name}</li>
                  }
              )
            }
          
          </ul>
        </div>
        <button onClick={ GETPK} >Get random pokemon</button>
        { 
          () => {
          if(value.getState().randPK !== []){
            const pk = value.getState().randPK;
            return(
            <div>
              <p>Pokemon al azar: {pk.name} </p>
              <p>Exp default: {pk.base_experience} </p>
              <p>Sprites:</p>
            </div>
            );
          }
        }
        }
      </div>
  );
}
export default Pokemon
