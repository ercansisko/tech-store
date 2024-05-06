import styled from "styled-components";
import SearchInput from "../../ui/SearchInput";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";

const OperationForm = styled.form`
  width: 100%;
  position: relative;
  margin-top: 3rem;
`;
const SearchItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OrderSelect = styled.select`
  position: absolute;
  right: 5%;
  top: 0;
  padding: 0.2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: var(--color-grey-200);
  color: var(--color-grey-700);
`;
const OrderOption = styled.option``;
function ProductOperations({ searchInput, setSearchInput }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    searchParams.delete("page");
    searchParams.set("search", searchInput);
    setSearchParams(searchParams);
  };
  const handleChange = (e) => {
    searchParams.delete("page");
    searchParams.set("orderBy", e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <OperationForm onSubmit={handleSubmit}>
      <SearchItems>
        <SearchInput
          placeholder="Search Product..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button type="search" color="blue">
          Ara
        </Button>
      </SearchItems>
      <OrderSelect
        value={searchParams.get("orderBy") || "created_at - desc"}
        onChange={handleChange}
      >
        <OrderOption value="created_at-desc">Yeniden eskiye</OrderOption>
        <OrderOption value="created_at-asc">Eskiden yeniye</OrderOption>
        <OrderOption value="price-asc">Fiyata Göre(artan)</OrderOption>
        <OrderOption value="price-desc">Fiyata Göre(azalan)</OrderOption>
      </OrderSelect>
    </OperationForm>
  );
}

export default ProductOperations;
