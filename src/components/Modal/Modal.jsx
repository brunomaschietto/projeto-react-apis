import React, { useContext } from 'react'
import fotoGotcha from '../../assets/fotoGotcha.png'
import fotoDelete from '../../assets/fotoDelete.png'
import { GlobalContext } from '../../contexts/GlobalContext';
import { DivPaiModal, ImgGotcha } from './styles'


export const ModalCapturar = () => {
    const context = useContext(GlobalContext);
    const { setIsOpen } = context
    
  return (
    <DivPaiModal onClick={() => setIsOpen(false)}>
        <ImgGotcha src={fotoGotcha} />
    </DivPaiModal>
  )
}

export const ModalDeletar = () => {
    const context = useContext(GlobalContext);
    const { setIsOpen } = context
    
  return (
    <DivPaiModal onClick={() => setIsOpen(false)}>
        <ImgGotcha src={fotoDelete} />
    </DivPaiModal>
  )
}

