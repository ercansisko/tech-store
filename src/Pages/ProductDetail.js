import styled from "styled-components";
import { useProduct } from "../features/product/useProduct";
import Spinner from "../ui/Spinner";
import DetailImage from "../features/product/DetailImage";
import DetailInformation from "../features/product/DetailInformation";
import DetailExplanation from "../features/product/DetailExplanation";
const ProductContainer = styled.div`
  border: 1px solid var(--color-grey-100);
  border-radius: 5%;
  background-color: var(--color-grey-50);
  width: 60%;
  aspect-ratio: 4/3;
  margin: 10rem auto 40rem;
  min-width: 790px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 0.5rem;
`;

function ProductDetail() {
  const { product, isLoading } = useProduct();
  return (
    <ProductContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid>
          <DetailImage
            productname={product.productname}
            image={product.image}
          />
          <DetailInformation product={product} />
          <DetailExplanation description={product.description} />
        </Grid>
      )}
    </ProductContainer>
  );
}

export default ProductDetail;
