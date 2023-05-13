import PokemonList from "./PokemonList";

export default function PokemonSearch() {

    async function search(search:string) {
        "use server";
        console.log("Searching for...", search);
        
        /* This fetch() is cached, as NextJS would overwrite this fetch with a cached fetch, so the UI
        would make the call to this API endpoint only once
        This server action does not page revalidate => refresh the page, as there is no mutation on the 
        server side and nothing is changing on the server. All that is done here is returning the data
        out of this fn() as a normal fn() does

        GitHub - Theo Browne's - Zact, Zod Server ACTions =allows=> validated typesafe API's using this
        mechanism
        */
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)

        const pokeData = await pokemonRes.json(); 

        return pokeData.results
               .filter((p: { name: string }) => p.name.toLowerCase().includes(search.toLowerCase()))    
                                                .map((p: {name: string}) => p.name)
                                                .slice(0, 50);
    }

    return <main className="p-5"> <PokemonList search={search} /> </main>
}
