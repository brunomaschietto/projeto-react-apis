import { Flex, Heading, Progress, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { PokemonID, PokemonName, PokemonType, TypesContainer } from "../../components/CardPokemon/styles";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { getPokemonType } from "../../utils/ReturnTypesPokemon";
import logoPokebola from '../../assets/pngwing.png'
import {
  BaseStatusDetalhes,
  EdicaoDetailsPage,
  ImgCardDetalhes,
  ImgCostas,
  ImgFrente,
  InformacaoDetalhes,
  MovimentosDetalhes,
  PInterno,
  PModificadoDetalhes,
} from "./styles";


const DetailsPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchPokemonsDetails();
  }, []);

  const fetchPokemonsDetails = () => {
    axios
      .get(`${BASE_URL}${params.id}`)
      .then((resp) => {
        setPokemonDetails(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  console.log(pokemonDetails.moves?.move?.name);


  return (
    <Flex flexDirection={"column"}>
      <Header />
      <EdicaoDetailsPage>
        <PModificadoDetalhes>Detalhes</PModificadoDetalhes>
        <Flex
              position={"relative"}
              bgImage={logoPokebola}
              bgRepeat={"no-repeat"}
              bgPosition={"right"}
              transition={" width 10s"}
              w={"1389.14px"}
              h={"664px"}
              borderRadius={"38px"}
              bgColor={'#729f92'}
              marginTop={"36px"}
              marginLeft={'25px'}
            >
          <ImgFrente src={pokemonDetails.sprites?.front_default} />
          <ImgCostas src={pokemonDetails.sprites?.back_default} />
          <BaseStatusDetalhes>
          <Heading marginTop={'19px'} marginLeft={'19px'}>Base Stats</Heading>
          <Flex flexDirection={'column'}
            borderTop={'1px grey solid'}
            marginTop={'19px'}
            width={'300px'}
            marginLeft={'19px'}
            >      
          {pokemonDetails.stats?.map((status) => {
            return (<Flex
            key={status.stat.name}
            borderBottom={'1px solid grey'}
            h={'30px'}
            alignItems={'center'}>
              <Flex w={'100px'}>
                <Text w={'60px'}
                textTransform={'capitalize'}
                textAlign={'end'}
                fontSize={'14px'}>
                  {status.stat.name.replace('special-attack', 'Sp. Atk').replace('special-defense', 'Sp. Def')}
                </Text>
                <Text fontSize={'14px'} margin={'auto'}>{status.base_stat}</Text>
              </Flex>
              <Progress w={'200px'} borderRadius={'3px'} colorScheme={status.base_stat <= 50 ? 'orange' : status.base_stat <= 80 ? 'yellow' : 'red'} value={status.base_stat}/>
              
            </Flex>
            
              )
          }) }
          {pokemonDetails.stats &&
                      <Flex
                        borderBottom={"1px grey solid"}
                        h={"28px"}
                        alignItems={"center"}
                      >
                        <Text
                          w={"60px"}
                          textTransform={"capitalize"}
                          textAlign={"end"}
                          fontSize={"14px"}>Total</Text>
                        <Text
                          margin={"8px"}
                          fontSize={"14px"}
                          fontWeight={"bold"}>
                          {pokemonDetails.stats.reduce((conta, stat) => conta + stat.base_stat, 0)}
                        </Text>
                      </Flex>
                    }
          </Flex>
          </BaseStatusDetalhes>
          <InformacaoDetalhes>
            <PokemonID>#00{pokemonDetails.id}</PokemonID>
            <Text
            textTransform={'capitalize'}
            fontSize= {'32px'}
            fontWeight= {'700'}
            letterSpacing= {'0em'}
            textAlign= {'left'}
            marginBottom= {'10px'}>
              {pokemonDetails.name}
            </Text>
            <TypesContainer>
              {pokemonDetails.types?.map((type) => {
                return (
                  <PokemonType
                    key={type.type.name}
                    src={getPokemonType(type.type.name)}
                  />
                );
              })}
            </TypesContainer>
          </InformacaoDetalhes>
          <MovimentosDetalhes>
            <PInterno>Moves: </PInterno>
            {pokemonDetails.moves &&
                        pokemonDetails.moves
                          .filter((move, i) => i < 4)
                          .map((move) => <Text
                            key={move.move.name}
                            textTransform={"capitalize"}
                            bgColor={"#ECECEC"}
                            padding={"6px"}
                            border={"1px grey"}
                            borderRadius={"12px"}
                            width={'135px'}
                            textAlign={'center'}
                          >
                            {(move.move.name).replace("-", " ")}
                          </Text>)}
          </MovimentosDetalhes>
          {/* <FotoPokebolaDetalhes src={logoPokebola} /> */}
          <ImgCardDetalhes src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`} />
          </Flex>
      </EdicaoDetailsPage>
    </Flex>
  );
};

export default DetailsPage;
