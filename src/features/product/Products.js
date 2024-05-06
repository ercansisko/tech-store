import styled from "styled-components";
import ProductItem from "./ProductItem";
import Spinner from "../../ui/Spinner";

const StyledProducts = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 2163px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1636px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1220px) {
    grid-template-columns: 1fr;
  }
  gap: 2rem;
  margin: 2rem;
`;
function Products({ products, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <StyledProducts>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </StyledProducts>
  );
}

export default Products;
