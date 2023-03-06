import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  ${({ content }) => content === "evenly" && css`
    border: 1px solid red;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    flex-direction: row;
  `}
`;