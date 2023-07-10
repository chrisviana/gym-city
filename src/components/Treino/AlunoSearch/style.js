import styled from "styled-components";

export const Consulta = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Resultado = styled.div`
  background-color: rgb(18, 18, 20);
  padding: 2rem;
  line-height: 2rem;
  color: #fff;
  display: ${(props) => (props.vazio ? "none" : "block")};
  font-size: 1rem;
  font-family: Roboto;
  font-style: normal;

  li {
    list-style: none;
    cursor: pointer;

    &:hover {
      color: #00875f;
      transition: color 0.5;
    }
  }
`;
