import styled from 'styled-components'

export const Container = styled.header`
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  position: relative;
`

export const Form = styled.form`
  position: absolute;
  height: 54px;
  bottom: -27px;
  width: 100%;
  max-width: 736px;
  display: flex;
  gap: 8px;
  padding: 0 1rem;
`

export const Input = styled.input`
  height: 100%;
  flex: 1;
  color: #fff;
  background: #262626;
  border: 1px solid #0D0D0D;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;

  &::placeholder {
    color: #808080;
  }
`

export const Button = styled.button`
  height: 100%;
  padding: 0 16px;
  background: #1E6F9F;
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: filter .2s;

  &:hover{
    filter: brightness(.8);
  }
`
