import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 41px;
`;

export const Nav = styled.nav`
  max-width: 460px;
  width: 100%;

  ul {
    display: flex;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 9px;
      list-style: none;

      a {
        display: flex;
        align-items: center;
        gap: 9px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;

        &.active {
          border-bottom: 4px solid #00b37e;
        }
      }
    }
  }
`;

export const InfoUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NameUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 214px;
  font-size: 16px;

  span {
    font-weight: bold;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
