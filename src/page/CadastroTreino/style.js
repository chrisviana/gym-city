import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1125px;
  width: 100%;
  margin-top: 86px;

  @media (min-width: 1366px) {
    margin-top: 50px;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonVoltar = styled.button`
  width: 10rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  background: #00875f;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;

  cursor: pointer;
  height: 2rem;

  &:hover {
    background: #015f43;
    transition: background 0.5s;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 2rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 30px;

  input {
    width: 100%;
    height: 54px;
    background-color: #121214;
    border: none;
    border-radius: 6px;
    padding: 2rem;
    color: #fff;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  select {
    background: #121214;
    height: 54px;
    border-radius: 6px;
    border: none;
    width: 403px;
    padding: 16px;
    color: #fff;
  }
`;

export const RootTabs = styled(Tabs.Root)`
  background-color: #29292e;
  border-radius: 6px;
  padding: 2rem;
  margin-top: 2rem;
`;

export const ListTabs = styled(Tabs.List)`
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #d9d9d9;
`;

export const ButtonTabs = styled(Tabs.Trigger)`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &[data-state="active"] {
    color: #00875f;
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
    font-weight: bold;
  }

  &:hover {
    color: #00875f;
    font-weight: bold;
  }
`;

export const ContentTabs = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 26.0625rem;
  height: 54px;
  background-color: #121214;
  border: none;
  border-radius: 6px;
  padding: 2rem;
  color: #fff;
`;

export const ContentForm = styled.div`
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const TextArea = styled.textarea`
  width: 70rem;
  height: 7.875rem;
  padding: 1rem;
  border-radius: 6px;
  background: #121214;
  color: #fff;
`;

export const ContentButton = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ButtonCadastrar = styled.button`
  width: 27.4375rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  background: #00875f;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;

  &:hover {
    background: #015f43;
    transition: background 0.5s;
  }
`;
