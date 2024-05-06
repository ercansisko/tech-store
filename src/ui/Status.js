import styled, { css } from "styled-components";

const Status = styled.span`
  display: inline-block;
  width: 80%;
  text-align: center;

  ${(props) =>
    props.type === "pending" &&
    css`
      background-color: var(--color-grey-700);
      color: var(--color-grey-50);
    `}
  ${(props) =>
    props.type === "approved" &&
    css`
      background-color: var(--color-blue-700);
      color: var(--color-grey-50);
    `}
      ${(props) =>
    props.type === "shipped" &&
    css`
      background-color: var(--color-green-700);
      color: var(--color-grey-50);
    `}
      border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.7rem;
`;
Status.defaultProps = {
  type: "pending",
};

export default Status;
