const apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`

const getApiData = async () => {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result
}
export default getApiData()

// export const pokemonDetails = async (name) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     const result = await response.json();
//     return result
// }
// export  pokemonDetails