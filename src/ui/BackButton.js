import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledBackButton = styled.button`
  cursor: pointer;
  padding: 0.3rem 1rem;
  border: 1px solid var(--color-grey-700);
  border-radius: 0.3rem;
  display: block;
  margin: 1rem;
  background-color: var(--color-grey-700);

  color: var(--color-grey-50);
  &:hover {
    background-color: var(--color-grey-500);
    border-width: 2px;
  }
`;
function BackButton() {
  const navigate = useNavigate();
  return <StyledBackButton onClick={() => navigate(-1)}>Geri</StyledBackButton>;
}

export default BackButton;
