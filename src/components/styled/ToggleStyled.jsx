import styled from 'styled-components'

export const ButtonToggleStyled = styled.button`
  position: fixed;
  right: 1.45rem;
  bottom: 1.45rem;
  padding: 0.8rem;
  color: #fff;
  font-size: 1.5rem;
  background-color: #363537;
  border-radius: 5px;
  outline-style: none;
  box-shadow: inset 0 0 2px 1px ${({ theme }) => theme.text};
  transition: box-shadow 0.25s linear;
  &:hover {
    box-shadow: inset 0px 0px 2px 1px ${({ theme }) => theme.text}, 0px 0px 12px 2px ${({ theme }) => theme.text},
      1px 1px 11px 5px rgba(0, 0, 0, 0);
  }
`
