import styled from 'styled-components'
import { Link } from 'gatsby'

export const LinkStyled = styled.li`
  border-bottom: 3px solid ${({ theme }) => theme.border};
`

export const LinkHoverStyled = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

export const InternalLinkStyled = styled(LinkHoverStyled)`
  position: relative;
  & span {
    position: absolute;
    top: 0.6rem;
  }
  &:after {
    content: '↩';
    position: absolute;
    top: 0.6rem;
    right: -2.8rem;
  }
`

export const ExternalLinkStyled = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

export const ItemLinkStyled = styled.a`
  display: block;
  position: relative;
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  transition: background-color 0.15s;
  cursor: pointer;
`
