import styled from "styled-components";

export const ButtonImprimir = styled.button`
  width: 27.5rem;
  height: 3.625rem;
  padding: 0.875rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #a06c00;
  background-color: transparent;
  color: #a06c00;
  font-size: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;

  &:hover {
    background-color: #a06c00;
    color: #fff;
    transition: background 0.5s;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
