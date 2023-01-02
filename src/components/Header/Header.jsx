import React from "react";
import { ButtonDetails, ButtonHome, ButtonPokedex, Cabecalho, CabecalhoPokedex, ImagemLogo } from "./style";
import logoPokemon from "../../assets/logo-pokemon.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Flex } from "@chakra-ui/react";

const Header = () => {
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const params = useParams()

  const renderizarHeader = () => {
    switch (location.pathname) {
      case '/':
        return (
          <Cabecalho>
              <ImagemLogo src={logoPokemon} /> 
              <ButtonHome onClick={() => goToPokedexPage(navigate)}>Pokedex</ButtonHome>
          </Cabecalho>
        );
      case '/pokedex':
        return (
          <CabecalhoPokedex>
              <ButtonPokedex onClick={() => goToHomePage(navigate)}>Todos os pokémons</ButtonPokedex>
              <ImagemLogo src={logoPokemon} /> 
          </CabecalhoPokedex>
        );

      case `/details/${params.id}`:
        return (
          <CabecalhoPokedex>
              <ButtonPokedex onClick={() => goToHomePage(navigate)}>Todos os pokémons</ButtonPokedex>
              <ImagemLogo src={logoPokemon} /> 
              <ButtonDetails>Excluir do Pokédex</ButtonDetails>
          </CabecalhoPokedex>
        )
    
      default:
        return (
          <Cabecalho>
              <ImagemLogo src={logoPokemon} /> 
              <ButtonHome onClick={() => goToHomePage(navigate)}>Página Inexistente</ButtonHome>
          </Cabecalho>
        );
    }
  }
  return (
    <Flex>{renderizarHeader()}</Flex>
  );
};

export default Header;
