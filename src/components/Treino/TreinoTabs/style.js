import * as Tabs from "@radix-ui/react-tabs";
import styled from "styled-components";

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
  margin-bottom: 22px;
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
  min-width: 60rem;
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
