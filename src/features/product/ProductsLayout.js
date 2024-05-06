import styled from "styled-components";
import ProductOperations from "./ProductOperations";
import { useState } from "react";
import { useFilteredProducts } from "./useFilteredProducts";
import Pagination from "../../ui/Pagination";
import { PAGE_SIZE } from "../../constants";
import Products from "./Products";

const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  background-color: var(--color-grey-50);
`;

function ProductsLayout() {
  const { products, count, isLoading } = useFilteredProducts();
  const [searchInput, setSearchInput] = useState("");

  return (
    <Container>
      <ProductOperations
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Products products={products} isLoading={isLoading} />
      <Pagination totalSize={count} pageSize={PAGE_SIZE} />
    </Container>
  );
}

export default ProductsLayout;
