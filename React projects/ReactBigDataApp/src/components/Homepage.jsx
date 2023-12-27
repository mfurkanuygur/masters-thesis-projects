import { useEffect, useState } from "react"
import getApiData from "../request/request"
import { Link } from "react-router-dom"

const Homepage = ({ pokemons, setPokemons }) => {
    // const [pokemons, setPokemons] = useState()


    useEffect(() => {
        !pokemons &&
            getApiData().then(items => {
                setPokemons(items.sort((a, b) => {
                    return a.id - b.id;
                }));
            })
    }, [])

    return (
        <div className="homepage">
            <h1>Pokemons</h1>
            <div className="container">
                {
                    pokemons?.map((pokemon, index) => (
                        <Link to={pokemon?.name} key={index}>
                            <div className="pokemon-card">
                                <div className="pokemon-img">
                                    <img src={pokemon?.sprites.other.dream_world.front_default} />
                                </div>
                                <div className="pokemon-title">
                                    <p>{pokemon?.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Homepage