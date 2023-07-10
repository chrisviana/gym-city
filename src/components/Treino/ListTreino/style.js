import styled from "styled-components";

export const Cabecalho = styled.table`
  min-width: 60rem;
  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;

    th {
      list-style: none;
      color: #7c7c8a;
      font-size: 1rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
      width: 71px;

      &:first-child {
        width: 300px;
        text-align: start;
      }
    }
  }
`;

export const ListExercicio = styled.tbody`
  width: 60rem;

  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.3125rem;
    background: #323238;
    padding: 1rem;
    height: 4.125rem;
    margin-top: 1rem;

    td {
      list-style: none;
      color: #fff;
      font-size: 1rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      text-align: center;
      width: 71px;

      &:first-child {
        width: 300px;
        text-align: start;
      }

      &:last-child {
        display: flex;
        gap: 0.7rem;
      }
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
`;

export const ContentList = styled.div`
  display: flex;
  width: 58rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
