import styled from "styled-components";
import Button from "../../ui/Button";
import { useShopping } from "../../contexts/ShoppingContext";

const ButtonGroup = styled.div`
  & button {
    border: none;
    border-radius: 0.5rem;
  }
  & span {
    margin: 0 1rem;
  }
`;

function CartButtons({ product }) {
  const { cart, addToCart, inc, dec } = useShopping();
  const amount = cart?.find((item) => item.id === product.id)?.amount || 0;
  const cartItem = {
    productname: product.productname,
    price: product.price,
    image: product.image,
    id: product.id,
    amount: amount === 0 ? 1 : amount,
  };
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(cartItem);
  };
  const handleIncrementAmount = (e) => {
    e.stopPropagation();
    e.preventDefault();
    inc(cartItem);
  };
  const handleDecrementAmount = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dec(cartItem);
  };
  return (
    <ButtonGroup>
      {amount > 0 ? (
        <>
          <Button color="blue" onClick={handleDecrementAmount}>
            -
          </Button>
          <span>{amount}</span>
          <Button color="blue" onClick={handleIncrementAmount}>
            +
          </Button>
        </>
      ) : (
        <Button onClick={handleClick} color="blue">
          Sepete Ekle
        </Button>
      )}
    </ButtonGroup>
  );
}

export default CartButtons;
