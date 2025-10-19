import React from "react";
import "./Pokemon.css"
import { useState } from "react";
import { useEffect } from "react";
export const HowNotToFetchApi =()=>{

    const [pokemon,setPokemon] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] =useState("");
    const Api = "https://pokeapi.co/api/v2/pokemon/pikachu"
   
    // const fetchPokemon = () => {
    //     fetch(Api)
    // .then((res) => res.json())
    // .then((data)=> {
    //  setPokemon(data)
    //  setLoading(false)
    // }          
    // )
    //  .catch((error) =>{
    //      console.log("here is error");
    //      setError(error);
    //  setLoading(false);
    //  }
    //  )
    // }

    //by Async try and catch
    const fetchPokemon= async()=> {
        try {
             const res =  await fetch(Api);
             const data = await res.json()
             setPokemon(data);
             setLoading(false);
        } catch (error) {
               console.log("here is error");
          setError(error);
      setLoading(false);
        }
    }
    useEffect(()=>{
        fetchPokemon()
    },[])
    console.log(pokemon);
     
    if(loading) return <div><h1>Loading..</h1></div>
    if(error)
   return (
<div>
    <h1>Error : {error.message}</h1>
</div>
)
        
    
    return(
     
        <div className="container ">
            <header>
                <h1>Lets catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img src={pokemon.sprites.other.dream_world.front_default}
                         alt={pokemon.name} />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            Height : <span>{pokemon.height}</span>
                        </p>

                          <p className="pokemon-info">
                            Weight: <span>{pokemon.weight}</span>
                        </p>

                          <p className="pokemon-info">
                            speed : <span>{pokemon.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
