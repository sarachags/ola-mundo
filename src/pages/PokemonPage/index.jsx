import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import axios from "axios";
import "./styles.css";

const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(true);

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    const delayLoading = setTimeout(() => {
      pegar100ReferenciasPokemons();
    }, 3000);

    return () => clearTimeout(delayLoading); 

  }, []);

  const pegarListaDePokemons = async () => {
    const listaTemporaria = [];

    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
      }
    }

    setListaPokemons(listaTemporaria);
  };

  useEffect(() => {
    const carregarPokemons = async () => {
      if (!loadingData) {
        await pegarListaDePokemons();
        setLoading(false);
      }
    };

    carregarPokemons();
  }, [loadingData, referenciasPokemons]);

  return (
  <div className="pokemon-container">
    {loading ? (
      <div className="loading-container">
        <div className="loading-circle">
          <p className="loading-text">Carregando...</p>
        </div>
      </div>
    ) : (
      listaPokemons.map((pokemon) => (
        <CardPokemon
          key={pokemon.id}
          nome={pokemon.name}
          foto={pokemon.sprites.front_default}
          id={pokemon.id}
          url={pokemon.forms[0].url}
        />
      ))
    )}
  </div>
);
};

export default PokemonPage;
