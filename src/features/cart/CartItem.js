import styled from "styled-components";
import CartButtons from "./CartButtons";
import DeleteButton from "../../ui/DeleteButton";
import { useShopping } from "../../contexts/ShoppingContext";

const StyledCartItem = styled.div`
  border-bottom: 1px solid var(--color-grey-300);
  display: grid;
  grid-template-columns: 20% auto 10%;
  grid-template-rows: 15vh;
  position: relative;
  & img {
    width: 100%;
    max-height: 12vh;
    object-fit: contain;
  }
`;
const ImageContainer = styled.div`
  margin: 1rem;
`;
const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;
function CartItem({ cartItem }) {
  const { deleteFromCart } = useShopping();
  return (
    <StyledCartItem>
      <ImageContainer>
        <img src={cartItem.image} alt="" />
      </ImageContainer>
      <CartItemInfo>
        <h4>{cartItem.productname}</h4>
        <CartButtons product={cartItem} />
      </CartItemInfo>
      <p>
        <b>
          {cartItem.amount}x{cartItem.price} TL
        </b>
      </p>
      <DeleteButton onClick={() => deleteFromCart(cartItem)} />
    </StyledCartItem>
  );
}

export default CartItem;
