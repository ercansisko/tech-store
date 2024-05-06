import styled from "styled-components";
import { HiMiniXMark } from "react-icons/hi2";
const StyledDeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  padding: 0.1rem;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  color: var(--color-grey-600);
  text-align: center;
  background-color: inherit;
`;
function DeleteButton({ onClick, disabled }) {
  return (
    <StyledDeleteButton disabled={disabled} onClick={onClick}>
      <HiMiniXMark />
    </StyledDeleteButton>
  );
}

export default DeleteButton;
