import React from 'react';
import styled, { css } from 'styled-components';

const effects = effectName => (
  {
    lift: css`
      transition: transform .3s linear, box-shadow .2s ease-out;
      &:hover{
        transform: translateY(-2px);
        box-shadow: 0 3px 1px rgba(0, 0, 0, .2);
      }
    `,
    fill: css``,
  }[effectName]
);

const ButtonButton = styled.button`
  display: inline-block;
  padding: 1rem 4rem 1rem;
  background: var(--brand-color-3);
  color: #fff;
  border: solid .2rem var(--brand-color-3);
  border-radius: .3rem;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto Condensed', 'PT Sans', sans-serif;
  font-size: 1.6rem;
  line-height: normal;
  cursor: pointer;
  + *{
    margin-left: .5rem;
  }
  ${props => effects(props.effect)}
  ${props => props.solarized && css`
    background: #fff;
    border-color: #fff;
    color: var(--brand-color-2);
  `}
  ${props => props.cta && css`
    margin: 4rem 0 1rem;
  `}
`;

const ButtonA = ButtonButton.withComponent('a');

const Button = props => (props.href ? <ButtonA {...props} /> : <ButtonButton {...props} />);

export default Button;
