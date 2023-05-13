import PokemonList from "./PokemonList";

export default function PokemonSearch() {

    async function search(search:string) {
        "use server";
        console.log("Searching for...", search);
        
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)

        const pokeData = await pokemonRes.json(); 

        return pokeData.results
               .filter((p: { name: string }) => p.name.toLowerCase().includes(search.toLowerCase()))    
                                                .map((p: {name: string}) => p.name)
                                                .slice(0, 50);
    }

    return <main className="p-5"> <PokemonList search={search} /> </main>
}
