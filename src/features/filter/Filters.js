import styled from "styled-components";
import CheckGroup from "./CheckGroup";
import Button from "../../ui/Button";
import { useProducts } from "../product/useProducts";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
const StyledFilters = styled.div`
  background-color: var(--color-grey-200);
  & h3 {
    text-align: center;
  }
`;
const FilterForm = styled.form`
  position: fixed;
  top: 4rem;
  bottom: 0;
  overflow-y: auto;
  width: 20rem;
  & button {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
function Filters() {
  const { products, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query1, setQuery1] = useState([]);
  const [query2, setQuery2] = useState([]);

  const brands = products?.reduce(
    (acc, cur) => (acc.includes(cur.brand) ? acc : acc.concat(cur.brand)),
    []
  );
  const types = products?.reduce(
    (acc, cur) => (acc.includes(cur.type) ? acc : acc.concat(cur.type)),
    []
  );
  const brandObj = { filter: "brand", arr: brands, header: "marka" };
  const typeObj = { filter: "type", arr: types, header: "tür" };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.delete("page", 1);
    let search1 = query1?.join("-");
    let search2 = query2?.join("-");
    query1.length === 0
      ? searchParams.delete("brand")
      : searchParams.set("brand", search1);
    query2.length === 0
      ? searchParams.delete("type")
      : searchParams.set("type", search2);
    setSearchParams(searchParams);
  };
  if (isLoading) return <Spinner />;
  return (
    <StyledFilters>
      <FilterForm onSubmit={handleSubmit}>
        <h3>Filtrele</h3>
        <CheckGroup filterObj={brandObj} query={query1} setQuery={setQuery1} />
        <CheckGroup filterObj={typeObj} query={query2} setQuery={setQuery2} />

        <Button type="block" color="grey">
          filtrele
        </Button>
      </FilterForm>
    </StyledFilters>
  );
}

export default Filters;
