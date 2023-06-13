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
  font-size: 20px;
  width: 631px;
  float: left !important;
  div + & {
    margin-top: 16px;
  }
`;

export const Close = styled(Dialog.Close)`
  float: right;
  margin-top: -15px;
  border: none;
  background: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled(Dialog.Content)`
  max-width: 563px;
  border-radius: 6px;
  padding: 40px 48px;
  background: #202024;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Options = styled.div`
  display: flex;
  width: 460px;
  justify-content: center;
  gap: 16px;
`;

export const ButtonYes = styled.button`
  background: #29292e;
  border-radius: 6px;
  height: 58px;
  width: 211px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 32px;

  &:hover {
    background-color: ${(props) => (props.yes ? "#00b37e" : "#F75A68")};
    transition: background-color 0.5s;
  }
`;
