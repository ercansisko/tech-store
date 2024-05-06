import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CartButtons from "../cart/CartButtons";

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;
const Product = styled.div`
  border: 1px solid var(--color-blue-700);
  border-radius: 1rem;
  width: 20rem;
  height: 20rem;
  background-color: var(--color-blue-100);
  padding: 2rem;
  color: var(--color-blue-700);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & img {
    width: 100%;
    aspect-ratio: 3/2;
    /* display: block; */
    margin: auto;
    object-fit: contain;
  }
  &:hover {
    border-width: 3px;
    cursor: pointer;
    border-color: var(--color-green-700);
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;
const Buttons = styled.div`
  width: 50%;
  margin: auto;
`;
function ProductItem({ product }) {
  return (
    <ProductContainer>
      <NavLink to={`/product/${product.id}`}>
        <Product>
          <img src={product.image} alt="" />
          <Tag>
            <h3>{product.productname}</h3>
            <p>{product.price} TL</p>
          </Tag>
          <Buttons>
            <CartButtons product={product} />
          </Buttons>
        </Product>
      </NavLink>
    </ProductContainer>
  );
}

export default ProductItem;
