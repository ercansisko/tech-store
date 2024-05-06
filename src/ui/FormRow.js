import styled from "styled-components";

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  padding: 1rem 20%;
  & label {
  }

  & input[type="text"],
  input[type="number"],
  textarea {
    border: 1px solid var(--color-grey-300);
    border-radius: 0.5rem;
    outline: none;
  }
`;
export default FormRow;
