import styled from "styled-components";

export const Table = styled.table`
  width: 60rem;
`;
export const Cabecalho = styled.thead`
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

      &:first-child {
        width: 300px;
        text-align: left;
      }
    }
  }
`;

export const ListExercicio = styled.tbody`
  min-width: 60rem;

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
        text-align: left;
      }

      &:last-child {
        display: flex;
        align-items: center;
        gap: 0.5em;
      }

      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }
`;
