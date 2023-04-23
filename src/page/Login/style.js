import styled from 'styled-components'
import imgBackground from '../../assets/backgroud.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imgBackground});
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 552px;
  height: 561px;
`
export const FormLogin = styled.form`
  margin-top: 5.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  span {
    color: var(--white);
    font-weight: 700;
    font-size: 20px;
  }

  input {
    color: var(--white);
    height: 82px;
    width: 509px;
    border-radius: 6px;
    background-color: var(--input-color);
    border: none;
    padding: 2rem;
  }
`
