import styled from "styled-components";
import IconeBuscar from "../../assets/IconeBuscar.svg";
import IconeBuscarHover from "../../assets/IconeBuscarHover.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1125px;
  width: 100%;
  margin-top: 86px;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: end;

  button {
    height: 50px;
    width: 157px;
    border-radius: 6px;
    background-color: #00875f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #00b37e;
      transition: background-color 0.5s;
    }
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;

  input {
    width: 100%;
    height: 54px;
    background-color: #121214;
    border: none;
    border-radius: 6px;
    padding: 2rem;
    color: #fff;
  }
`;

export const List = styled.div`
  margin-top: 21px;

  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  max-height: 588px;

  @media (min-width: 1366px) {
    max-height: 300px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Estilo para a área de fundo do scroll */
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* Estilo para o polegar do scroll */
  ::-webkit-scrollbar-thumb {
    background-color: #00875f;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 21px;

    li {
      width: 1121px;
      height: 66px;
      background-color: #29292e;
      border-radius: 5px;
      list-style: none;
      display: flex;
      align-items: center;
      padding-left: 42px;
      color: #c4c4cc;
      font-size: 16px;
      justify-content: space-between;
      padding-right: 32px;

      div {
        display: flex;
        gap: 14px;
      }

      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }
`;
