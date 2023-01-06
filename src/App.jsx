import React, { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL, URL2 } from "./constants/url";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  
  

  useEffect(() => {
    fetchPokemons()
  }, []);
  

  const fetchPokemons = () => {
    axios
    .get(
      URL2
    )
    .then((resp) => {
      setPokemons(resp.data.results);

    })
    .catch((error) => {
      console.log("Erro ao buscar informaçöes de pokemon");
      console.log(error.response);
    });
  }


  const addToPokedex = (pokemonAdd) => {
    const isAlreadyOnPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonAdd.name)
    if(!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonAdd]
      setPokedex(newPokedex)
      setIsOpen(true)
    }
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
    setPokedex(newPokedex)
    setIsOpen(true)
  }

  const context = {
    pokemons: pokemons,
    setPokemons: setPokemons,
    pokedex: pokedex,
    addToPokedex: addToPokedex,
    removeFromPokedex: removeFromPokedex,
    pokemonDetails,
    setPokemonDetails,
    isOpen,
    setIsOpen

  }
  
  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
};

export default App;
