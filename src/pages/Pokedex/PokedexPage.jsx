import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import { EdicaoPokedexPage, PModificadoPokedex } from "./style";
import { BASE_URL } from "../../constants/url";
import PokemonCard from "../../components/CardPokemon/PokemonCard";
import { Flex } from "@chakra-ui/react";
import { ModalDeletar } from "../../components/Modal/Modal";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex, isOpen } = context


  return (
    <>
      <Header />
      <EdicaoPokedexPage>
      {isOpen && <ModalDeletar />}
        <PModificadoPokedex>Meus Pokémons</PModificadoPokedex>
        <Flex paddingTop={'55px'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={'50px 20px'}>
        {pokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} pokemonUrl={`${BASE_URL}${pokemon.name}`} />
        })}
        </Flex>
      </EdicaoPokedexPage>
    </>
  );
};

export default PokedexPage;
