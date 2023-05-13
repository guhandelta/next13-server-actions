"use client";
import { useEffect, useState } from 'react';


export default function PokemonList({ search }:{ search: (search: string) => Promise<string[]> }) {

    const [ pokemonNames, setPokemonNames ] = useState<string[]>([]);
    const [ searchString, setSearchString ] = useState("");

    useEffect(()=>{
        search("").then(names => setPokemonNames(names));
    },[search])
    
    console.log(pokemonNames);

    const onClick = async () => {
        console.log("searchString:\t", searchString);        
        setPokemonNames(await search(searchString));
    };

  return (
    <div>
        <div className="flex gap-2">
            <input 
                type="text" 
                value={searchString} 
                onChange={e => setSearchString(e.target.value)}
                className="border border-gray-300 rounded-lg py-4 px-4 text-base " 
            />
            <button 
                onClick={onClick}
                className="bg-blue-600 disabled:bg-gray-500 inline-flex px-10 py-4 w-40 h-15 ">Search</button>
        </div>
        <div className="text-4xl py-5">Names: {pokemonNames.join(",")}</div>
    </div>
  )
}
 