import styled from "styled-components";

const StyledButtonIcon = styled.button`
  background-color: var(--color-blue-700);
  color: var(--color-blue-100);
  border: none;
  border-radius: 20%;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  &:hover {
    background-color: var(--color-green-700);
  }
`;
function ButtonIcon({ icon, onClick }) {
  return (
    <StyledButtonIcon onClick={onClick}>
      <span>{icon}</span>
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
