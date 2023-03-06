import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Text = styled.h1`
color: #2587be;
font-family: math;
`;
export const ContainerCounter = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-end;
`;

export const Screen = styled.div`
  background-color: #373839;
  border-radius: 50%;
  font-size: 3rem;
  font-family: sans-serif;
  padding: 20px;
  color: white;
  border: 1px solid white;
  z-index: 1;
`;

export const Button = styled.div`
    background-color: #373839;
    border-radius: 50%;
    font-family: sans-serif;
    padding: 17px;
    height: 18px;
    width: 18px;
    color: white;
    border: 1px solid black;
    position: absolute;
    margin-left: 114px;
    font-weight: 900;
    ${({ content }) => content === "raigt" && css`
    background-color: white;
    color: black;
    margin-right: 228px;
  `}

`;
