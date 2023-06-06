import * as Dialog from "@radix-ui/react-dialog";

import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Title = styled(Dialog.Title)`
  color: #fff;
  font-size: 16px;
  float: left !important;

  div + & {
    margin-top: 16px;
  }
`;

export const Close = styled(Dialog.Close)`
  float: right;
  margin-top: -4px;
  border: none;
  background: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled(Dialog.Content)`
  min-width: 800px;
  border-radius: 6px;
  padding: 40px 48px;
  background: #202024;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;

    input {
      background: #121214;
      height: 54px;
      border-radius: 6px;
      border: none;
      width: 87px;
      padding: 16px;
      color: #fff;

      &:first-child {
        width: 403px;
      }

      &:last-child {
        width: 187px;
      }
    }
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
