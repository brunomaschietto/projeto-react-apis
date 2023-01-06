import React, { useContext, useEffect, useState } from "react";
import {
  BotaoCapturar,
  BotaoDeletar,
  BotaoDetalhes,
  Card,
  ImgCard,
  ImgPokeball,
  PokemonID,
  PokemonName,
  PokemonType,
  TypesContainer,
} from "./styles";
import logoPokebola from "../../assets/logo-pokebola.svg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonType } from "../../utils/ReturnTypesPokemon";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getColors } from "../../utils/ReturnColor";
import { goToDetailsPage } from "../../routes/coordinator";
import { useDisclosure } from "@chakra-ui/react";

const PokemonCard = (props) => {
  const context = useContext(GlobalContext)
  const { pokemon, pokemonUrl} = props;
  const { addToPokedex, removeFromPokedex} = context;
  const [pokemonsCard, setPokemonsCard] = useState([]);
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPokemonCard();
  }, []);

  const fetchPokemonCard = () => {

    axios
      .get(pokemonUrl)
      .then((resp) => {
        setPokemonsCard(resp.data);
      })
      .catch((error) => {
        console.log("Algo deu errado");
        console.log(error.response);
      });
  };


  return (
    <Card color={getColors(pokemonsCard.types && (pokemonsCard.types[0].type.name))}>
      <div>
        <PokemonID>#00{pokemonsCard.id}</PokemonID>
        <PokemonName>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </PokemonName>
        <TypesContainer>
        {pokemonsCard.types?.map((type) => {
          return <PokemonType key={type.type.name} src={getPokemonType(type.type.name)}/>
        })}
        </TypesContainer>
        <BotaoDetalhes onClick={() => goToDetailsPage(navigate, pokemonsCard.id)}>Detalhes</BotaoDetalhes>
      </div>
      <div>
        <ImgCard
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonsCard.id}.png`}
        />
        {location.pathname === '/' ? (<BotaoCapturar onClick={() => addToPokedex(pokemonsCard) }>Capturar!</BotaoCapturar>) : (<BotaoDeletar onClick={() => removeFromPokedex(pokemonsCard)}>Excluir</BotaoDeletar>)}
      </div>
      <ImgPokeball src={logoPokebola} />
    </Card>
  );
};

export default PokemonCard;
