import styled from "styled-components";

const SearchInput = styled.input.attrs({ type: "text" })`
  width: 50%;
  /* display: block; */
  border: none;
  border-radius: 0.4rem;
  line-height: 2;
  padding: 0.1rem 1rem;
  background-color: var(--color-blue-100);
  color: var(--color-grey-500);
  height: 3rem;
  border: 1px solid var(--color-blue-700);
  &::placeholder {
    color: var(--color-grey-500);
  }
`;
export default SearchInput;
