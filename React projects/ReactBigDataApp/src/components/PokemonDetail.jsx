import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getApiData from "../request/request"

const PokemonDetail = ({ pokemons, setPokemons }) => {
    const { id } = useParams()
    const [pokemonDetail, setPokemonDetail] = useState()

    let myPokemon
    if (pokemons) {
        myPokemon = pokemons?.find(data => data.name == id)
    }
    else {
        myPokemon = pokemonDetail
    }

    useEffect(() => {
        !pokemons &&
            getApiData().then(data => {
                setPokemonDetail(data.find(poke => poke?.name == id))
                setPokemons(data.sort((a, b) => {
                    return a.id - b.id;
                }));
            })

    }, [])

    return (
        <div>
            <p>{id}</p>
            <img src={myPokemon?.sprites.other.dream_world.front_default} alt={myPokemon?.name} />
            <p>{myPokemon?.id}</p>
        </div>

    )
}

export default PokemonDetail