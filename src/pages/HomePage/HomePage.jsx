import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import { EdicaoHomePage, PModificado } from "./style";
import { BASE_URL } from "../../constants/url";
import PokemonCard from "../../components/CardPokemon/PokemonCard";
import { Flex, Skeleton } from "@chakra-ui/react";
import { getColors } from "../../utils/ReturnColor";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const {pokemons, pokedex } = context

  const filteredPokemons = () =>
    pokemons.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Flex flexDirection={'column'}>
      <Header />
      <EdicaoHomePage>
        <PModificado>Todos Pokémons</PModificado>
        <Flex paddingTop={'55px'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={'50px 20px'}>
        {filteredPokemons().map((pokemon) => {
          return <PokemonCard key={pokemon.url} pokemon={pokemon} pokemonUrl={`${BASE_URL}${pokemon.name}`}/>
        })}
        </Flex>
        
      </EdicaoHomePage>
    </Flex>
  );
};

export default HomePage;
