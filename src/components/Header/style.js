import styled from "styled-components";

export const Cabecalho = styled.header`
  height: 160px;
  background-color: #ffffff;
`;

export const ImagemLogo = styled.img`
  width: 307px;
  height: 113px;
  position: absolute;
  top: 21px;
  left: 766px;
`;

export const ButtonHome = styled.button`
  width: 287px;
  height: 74px;
  position: absolute;
  top: 41px;
  left: 1212px;
  border-radius: 8px;
  padding: 4px, 10px, 4px, 10px;
  background-color: #33a4f5;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
`;

export const CabecalhoPokedex = styled.header`
  height: 160px;
  background-color: #ffffff;
`;

export const ButtonPokedex = styled.button`
  position: absolute;
  height: 36px;
  left: 300px;
  top: 62px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-decoration-line: underline;

  color: #1a1a1a;
`;

export const ButtonDetails = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  position: absolute;
  width: 226px;
  height: 57px;
  left: 1274px;
  top: 51px;

  background: #ff6262;
  color: white;
  border-radius: 8px;
`;
