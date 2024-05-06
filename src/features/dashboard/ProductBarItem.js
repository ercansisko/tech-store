import styled from "styled-components";
import DeleteButton from "../../ui/DeleteButton";
import { useDeleteProduct } from "./useDeleteProduct";
const StyledProductBarItem = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr 1fr 1fr;
  & p {
    margin: 0.4rem;
  }
  & h4 {
    margin: 0.4rem;
  }
`;
const ProductImage = styled.img`
  width: 4rem;
  object-fit: contain;
  aspect-ratio: 1;
`;
const StockTag = styled.p`
  padding-top: 1.5rem;
`;
function ProductBarItem({ product }) {
  const { type, brand, productname, price, stock, id } = product;
  const { isLoading, deleteFn } = useDeleteProduct();
  const handleDelete = () => {
    deleteFn(id);
  };
  if (isLoading) return null;
  return (
    <StyledProductBarItem>
      <ProductImage src={product.image} />
      <div>
        <p>{brand}</p>
        <p>{type}</p>
      </div>
      <div>
        <p>{productname}</p>
        <h4>{price} TL</h4>
      </div>
      <StockTag>Stok:{stock}</StockTag>
      <DeleteButton disabled={isLoading} onClick={handleDelete} />
    </StyledProductBarItem>
  );
}

export default ProductBarItem;
