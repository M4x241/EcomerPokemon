const lspokemon = 'https://pokeapi.co/api/v2/pokemon/'

export async function getallpokemon(lim=20){
    try{
        const response = await fetch(lspokemon+"?limit=20")
        const data = await response.json()
        console.log(lim)
        return data.results;
    }
    catch{
        console.log("Error")
        return 0;
    }

}

export async function pokemon (name='pikachu') {
    try{
        const response = await fetch(lspokemon+name)
        const data = await response.json()
        return data;
    }
    catch{
        console.log("No hay")
        return null;
    }
}

export async function getpokemonURL (url='https://pokeapi.co/api/v2/pokemon/1') {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
    catch{
        console.log("No hay")
        return null;
    }
}