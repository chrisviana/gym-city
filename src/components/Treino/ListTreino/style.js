import styled from "styled-components";

export const Cabecalho = styled.div`
  min-width: 58rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      list-style: none;
      color: #7c7c8a;
      font-size: 1rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;

      &:first-child {
        width: 300px;
      }
    }
  }
`;

export const ListExercicio = styled.div`
  min-width: 58rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.3125rem;
    background: #323238;
    padding: 1rem;
    height: 4.125rem;
    margin-top: 1rem;

    li {
      list-style: none;
      color: #fff;
      font-size: 1rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;

      &:first-child {
        width: 275px;
      }
    }
  }
`;
