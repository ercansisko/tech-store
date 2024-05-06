import styled from "styled-components";
import { useShopping } from "../../contexts/ShoppingContext";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useState } from "react";
import CustomerForm from "./CustomerForm";

const StyledCartLayout = styled.div`
  border: 1px solid var(--color-grey-100);
  border-radius: 2%;
  background-color: var(--color-grey-50);
  width: 80%;
  min-height: 50vh;
  margin: 10rem auto 40rem;
  min-width: 790px;
  padding-bottom: 1rem;
`;
const CartItems = styled.div`
  padding: 1rem;
`;
const PriceTag = styled.p`
  padding-right: 1rem;
  text-align: right;
`;
const EmptyCart = styled.div`
  width: 50%;
  text-align: center;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 2rem;
  margin: auto;
`;
function CartLayout() {
  const { cart } = useShopping();
  const [customerSession, setCustomerSession] = useState(false);
  const totalPrice = cart?.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );

  return (
    <StyledCartLayout>
      {cart.length === 0 ? (
        <EmptyCart>sepetiniz boş</EmptyCart>
      ) : (
        <>
          <CartItems>
            {cart?.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
          </CartItems>
          <PriceTag>
            <b>Toplam Fiyat </b>
            {totalPrice} TL
          </PriceTag>

          {customerSession ? (
            <CustomerForm setCustomerSession={setCustomerSession} />
          ) : (
            <Button
              onClick={() => setCustomerSession(true)}
              type="block"
              color="blue"
            >
              Alışverişi Tamamla
            </Button>
          )}
        </>
      )}
    </StyledCartLayout>
  );
}

export default CartLayout;
