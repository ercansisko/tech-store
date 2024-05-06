import styled, { css } from "styled-components";
const Button = styled.button`
  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: var(--color-blue-700);
      color: var(--color-blue-100);
    `}
  ${(props) =>
    props.color === "grey" &&
    css`
      background-color: var(--color-grey-700);
    `}
    ${(props) =>
    props.color === "green" &&
    css`
      background-color: var(--color-green-700);
    `}
    ${(props) =>
    props.color === "indigo" &&
    css`
      background-color: var(--color-indigo-700);
    `}

  ${(props) =>
    props.type === "block" &&
    css`
      display: block;
      width: 10rem;
      margin: auto;
      border-radius: 0.5rem;
    `}
  ${(props) =>
    props.type === "search" &&
    css`
      height: 3rem;
      border-radius: 0.4rem;
    `}
  border-radius: 0.5rem;
  border: none;
  color: var(--color-grey-300);
  padding: 0.5rem 1rem;
  &:hover {
    background-color: var(--color-green-100);
    color: var(--color-grey-700);
    cursor: pointer;
  }
`;

export default Button;
