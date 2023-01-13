import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: #262626;
  border: 1px solid #333333;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const CheckContainer = styled.button`
  width: 18px;
  height: 18px;
  background: none;
  border: none;

  div {
    width: 17.45px;
    height: 17.45px;
    border-radius: 999px;
    border: 2px solid #4EA8DE;
    cursor: pointer;
    transition: outline .02s;

    &:hover{
      outline: 2px solid rgba(255, 255, 255, 0.3);
    }
  }

  svg {
    width: 100%;
    height: 100%;
    color: #5E60CE;
  }
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #808080;
  cursor: pointer;
  transition: color .2s;

  &:hover{
    color: #4EA8DE;
  }
`

