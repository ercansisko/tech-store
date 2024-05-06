import styled, { css } from "styled-components";

const FilterLabel = styled.div`
  ${(props) =>
    props.color === "green" &&
    css`
      background-color: var(--color-green-700);
    `}
  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: var(--color-blue-700);
    `}
    ${(props) =>
    props.color === "indigo" &&
    css`
      background-color: var(--color-indigo-700);
    `}
    ${(props) =>
    props.color === "grey" &&
    css`
      background-color: var(--color-grey-700);
    `}
    color:var(--color-grey-200);
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  &:hover {
    background-color: var(--color-green-100);
    color: var(--color-grey-700);
  }
`;
export default FilterLabel;
