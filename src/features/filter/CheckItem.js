import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledCheck = styled.div``;

function CheckItem({ filterItem, header, query, setQuery, filteredField }) {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get(filteredField))
      setQuery(searchParams.get(filteredField).split("-"));
  }, [filteredField, searchParams, setQuery]);
  const handleCheck = (e) => {
    e.target.checked
      ? setQuery((prev) => prev.concat(e.target.value))
      : setQuery((prev) => prev.filter((x) => x !== e.target.value));
  };
  return (
    <StyledCheck>
      <input
        id={filterItem}
        type="checkbox"
        value={filterItem}
        onChange={handleCheck}
        defaultChecked={searchParams
          .get(filteredField)
          ?.split("-")
          .includes(filterItem)}
      />
      <label htmlFor={filterItem}>{filterItem}</label>
    </StyledCheck>
  );
}

export default CheckItem;
