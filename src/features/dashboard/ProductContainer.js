import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import ProductBarItem from "./ProductBarItem";

const StyledProductContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  & h2 {
    text-align: center;
  }
`;
function ProductContainer({ products, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <StyledProductContainer>
      <h2>ÜRÜNLER</h2>
      {products.map((product) => (
        <ProductBarItem key={product.id} product={product} />
      ))}
    </StyledProductContainer>
  );
}

export default ProductContainer;
