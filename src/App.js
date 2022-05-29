import React, {
    useEffect,
    useState
} from 'react';
import './App.css';
import axios
    from "axios";
import PokemonCard from './components/PokemonCard'
import logo from './assets/logo.jpg';

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const result = await axios.get(`${endpoint}`)
                console.log(result.data);
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokemon();
    }, [endpoint]);

    return (
      <>
      <body>
      <img className="logo" src={logo} alt="pokemon"/>
         <div>
             <button
                 type="button"
                 onClick={() => setEndpoint(pokemon.previous)}
             >previous</button>
             <button
                 type="button"
                 onClick={() => setEndpoint(pokemon.next)}
             >next</button>
         </div>
         <div className="all-cards">
             {pokemon.results && pokemon.results.map((poke) => {
                 return <PokemonCard url={poke.url} name={poke.name} key={poke.name} />
             })}
         </div>
      </body>
      </>
  );
}


export default App;
