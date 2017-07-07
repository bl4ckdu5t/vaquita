import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem 4rem 1.2rem;
  background: var(--brand-color-3);
  color: white;
  border: solid .2rem var(--brand-color-3);
  border-radius: .3rem;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto Condensed', 'PT Sans', sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
  transition: transform .3s linear;
  &:hover{
    transform: translateY(-2px);
  }
  ${props => props.solarized && css`
    background: white;
    border-color: white;
    color: var(--brand-color-2);
  `}
  ${props => props.cta && css`
    margin: 4rem 0 1rem;
  `}
`;

export default Button;
