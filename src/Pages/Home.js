import { styled } from "styled-components";
import Filters from "../features/filter/Filters";
import ProductsLayout from "../features/product/ProductsLayout";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 20rem auto;
  min-height: 100%;
`;
function Home() {
  return (
    <>
      <StyledHome>
        <Filters />
        <ProductsLayout />
      </StyledHome>
    </>
  );
}

export default Home;
