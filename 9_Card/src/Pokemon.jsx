import React from "react"
import "./index.css"
import { useEffect } from "react"
import { useState } from "react"
import { PokemonCards } from "./PokemonCards"
export const Pokemon =()=>{
    const API = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=24"

    const [pokemon,setPokemon]=useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [search,setSearch] = useState("");
    const fetchPokemon = async()=>{
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);
            const detailedPokemonData = data.results.map( async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                // console.log(data);
                return data;
                
            }
        )
           const detailedResponse = await Promise.all(detailedPokemonData)    ; 
           console.log(detailedResponse);
           setPokemon(detailedResponse);
           setLoading(false);
        } catch (error) {
         setLoading(false);
         setError(error);
        }
    }
    useEffect(()=>{
        fetchPokemon();
    },[])


    // search..
    const searchData = pokemon.filter((curPokemon) => 
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if(error){
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }
return (
  <>
    <section className="container">
      <header>
        <h1>Let's Catch Pokemon</h1>
      </header>

      <input
        type="text"
        placeholder="search Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <ul className="cards">
          {searchData.map((curPokemon) => (
            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
          ))}
        </ul>
      </div>
    </section>
  </>
)
}
