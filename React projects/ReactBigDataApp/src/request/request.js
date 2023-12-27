const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`


const getApiData = async () => {
    const arr = [];

    const fetchData = async (i) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const result = await response.json();
        arr.push(result);
    };

    // Create an array of promises for each fetchData call
    const promises = [];
    for (let i = 1; i <= 1000; i++) {
        promises.push(fetchData(i));
    }

    // Wait for all promises to resolve using Promise.all
    await Promise.all(promises);

    return arr;
};

export default getApiData;

