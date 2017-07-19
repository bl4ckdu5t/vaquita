import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem 4rem 1rem;
  background: var(--brand-color-3);
  color: #fff;
  border: solid .2rem var(--brand-color-3);
  border-radius: .3rem;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto Condensed', 'PT Sans', sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
  transition: transform .3s linear, box-shadow .2s ease-out;
  &:hover{
    transform: translateY(-2px);
    box-shadow: 0 3px 1px rgba(0, 0, 0, .2);
  }
  ${props => props.solarized && css`
    background: #fff;
    border-color: #fff;
    color: var(--brand-color-2);
  `}
  ${props => props.cta && css`
    margin: 4rem 0 1rem;
  `}
`;

export default Button;
