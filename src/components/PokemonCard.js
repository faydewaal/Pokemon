import {
    useEffect,
    useState
} from "react";
import axios
    from "axios";

const PokemonCard = ({ url}) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function PokemonData() {
            try {
                const result = await axios.get(`${url}`)
                console.log(result.data);
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        PokemonData();
    }, []);

    return(
        <div className="card">
            {Object.keys(pokemon).length > 0 &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_shiny} alt="pokemon"/>
                    <h3>moves: {pokemon.moves.length}</h3>
                    <h3>weight: {pokemon.weight}</h3>
                    <h3>abilities: </h3>
                    <ul>{ pokemon.abilities.map((ability) => {
                        return <li>{ability.ability.name}</li>
                    })}</ul>
                </>
            }
        </div>

    )
};

export default PokemonCard;