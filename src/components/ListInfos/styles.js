import styled from "styled-components";

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
    width: 957px;
    height: 54px;
    background-color: #121214;
    border: none;
    border-radius: 6px;
    padding: 2rem;
  }

  button {
    width: 147px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #00b37e;
    border-radius: 6px;
    background-color: transparent;
    color: #00b37e;
    padding: 14px 32px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;

    &::before {
      content: url(../../assets/IconeBuscar.svg);
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px; /* ajuste o tamanho da imagem conforme necessário */
      height: 16px; /* ajuste o tamanho da imagem conforme necessário */
      margin-right: 8px; /* ajuste o espaçamento entre a imagem e o texto conforme necessário */
    }

    &:hover {
      background-color: #00875f;
      border: 1px solid #00875f;
      color: #fff;
    }

    img {
      margin-top: 6px;
    }
  }
`;
