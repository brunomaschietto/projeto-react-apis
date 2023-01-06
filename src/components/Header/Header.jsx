import React, { useContext } from "react";
import {
  ButtonDetails,
  ButtonDetailsAdicionar,
  ButtonHome,
  ButtonPokedex,
  Cabecalho,
  CabecalhoPokedex,
  ImagemLogo,
} from "./style";
import logoPokemon from "../../assets/logo-pokemon.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Flex } from "@chakra-ui/react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ModalCapturar, ModalDeletar } from "../Modal/Modal";


const Header = () => {
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const params = useParams();
  const context = useContext(GlobalContext);
  const { pokemonDetails, pokedex, addToPokedex, removeFromPokedex, isOpen, setIsOpen } = context;

  const renderizarHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Cabecalho>
            <ImagemLogo src={logoPokemon} />
            <ButtonHome onClick={() => goToPokedexPage(navigate)}>
              Pokedex
            </ButtonHome>
          </Cabecalho>
        );
      case "/pokedex":
        return (
          <CabecalhoPokedex>
            <ButtonPokedex onClick={() => goToHomePage(navigate)}>
              Todos os pokémons
            </ButtonPokedex>
            <ImagemLogo src={logoPokemon} />
          </CabecalhoPokedex>
        );

      case `/details/${params.id}`:
        return (
          <CabecalhoPokedex>
            <ButtonPokedex onClick={() => goToHomePage(navigate)}>
              Todos os pokémons
            </ButtonPokedex>
            <ImagemLogo src={logoPokemon} />
            <div>
            {(isOpen && <ModalDeletar />)}
            <ButtonDetailsAdicionar
              onClick={() => addToPokedex(pokemonDetails)}
            >
              Adicionar à Pokédex
            </ButtonDetailsAdicionar>

            </div>

            {console.log(pokedex)}
            {console.log(pokemonDetails)}
            {/* {pokedex.name === pokemonDetails.name ? <ButtonDetails onClick={() => removeFromPokedex(pokemonDetails)} >Excluir do Pokédex</ButtonDetails> : <ButtonDetailsAdicionar onClick={() => addToPokedex(pokemonDetails)}>Adicionar à Pokédex</ButtonDetailsAdicionar>} */}
            {pokedex.map((pokemon) =>
              pokemon.id === pokemonDetails.id ? (
                <div>
                  {(isOpen && <ModalCapturar />)}
                <ButtonDetails
                  onClick={() => removeFromPokedex(pokemonDetails) (setIsOpen(true)) }
                >
                  Excluir do Pokédex
                </ButtonDetails>

                </div>
              ) : (
                <div>
                  {(isOpen && <ModalDeletar />)}
                <ButtonDetailsAdicionar
                  onClick={() => addToPokedex(pokemonDetails) (setIsOpen(true)) }
                >
                  Adicionar à Pokédex
                </ButtonDetailsAdicionar>

                </div>
              )
            )}
          </CabecalhoPokedex>
        );

      default:
        return (
          <Cabecalho>
            <ImagemLogo src={logoPokemon} />
            <ButtonHome onClick={() => goToHomePage(navigate)}>
              Voltar para a Home
            </ButtonHome>
          </Cabecalho>
        );
    }
  };
  return <Flex>{renderizarHeader()}</Flex>;
};

export default Header;
