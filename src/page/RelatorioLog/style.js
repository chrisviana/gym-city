import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  h1 {
    color: #fff;
  }

  input {
    width: 50%;
    height: 54px;
    background-color: #121214;
    border: none;
    border-radius: 6px;
    padding: 2rem;
    color: #fff;
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 1125px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  table,
  tr,
  td {
    border: 1px solid #fff;
    color: #c4c4cc;
  }

  th {
    color: #fff;
  }

  td {
    padding: 1rem;
  }
`;

export const Button = styled.button`
  background: #00875f;
  border-radius: 6px;
  height: 58px;
  width: 439px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 32px;

  &:hover {
    background-color: #00b37e;
    transition: background-color 0.5s;
  }
`;
