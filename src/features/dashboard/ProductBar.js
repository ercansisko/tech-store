import styled from "styled-components";
import ProductContainer from "./ProductContainer";
import { useProducts } from "../product/useProducts";

const StyledProductBar = styled.div`
  border-right: 1px solid var(--color-grey-200);
  padding-top: 2rem;
`;
function ProductBar() {
  const { products, isLoading } = useProducts();

  return (
    <StyledProductBar>
      <ProductContainer products={products} isLoading={isLoading} />
    </StyledProductBar>
  );
}

export default ProductBar;
