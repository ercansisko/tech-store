import styled from "styled-components";
import CheckItem from "./CheckItem";

const StyledCheckGroup = styled.div``;
const Group = styled.div`
  width: 50%;
  margin: auto;
  & h4 {
    text-align: center;
  }
`;
function CheckGroup({ filterObj, query, setQuery }) {
  const { filter: filteredField, arr, header } = filterObj;
  return (
    <StyledCheckGroup>
      <Group>
        <h4>{header}</h4>
        {arr.map((filterItem) => (
          <CheckItem
            header={header}
            query={query}
            setQuery={setQuery}
            filterItem={filterItem}
            key={filterItem}
            filteredField={filteredField}
          />
        ))}
      </Group>
    </StyledCheckGroup>
  );
}

export default CheckGroup;
