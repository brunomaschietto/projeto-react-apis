import { Flex, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Header/Header'
import pikachuEveeErrorPage from '../../assets/pikachuEveeError.gif'
import pokemonsErrorPage from '../../assets/pokemonsError.webp'
import { ImgGif } from './style'

const NotFoundPage = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'} padding={'10px'}>
    <Header />
    <Heading padding={'10px'} fontFamily={'Poppins'}>Ops! Página não encontrada</Heading>
    <ImgGif src={pikachuEveeErrorPage} />
    </Flex>
  )
}

export default NotFoundPage