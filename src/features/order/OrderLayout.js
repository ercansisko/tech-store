import styled from "styled-components";
import { useOrder } from "./useOrder";
import Spinner from "../../ui/Spinner";
import OrderStatus from "./OrderStatus";

const StyledOrderLayout = styled.div`
  width: 50%;
  aspect-ratio: 1;
  margin: 10rem auto;
  padding-left: 15%;
  padding-right: 15%;
  background-color: var(--color-grey-100);
  border: none;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const OrderRow = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalTag = styled.p`
  float: right;
`;
function OrderLayout() {
  const { order, isLoading } = useOrder();
  const {
    id,
    orderdetails: orders,
    customers: { fullname } = {},
    status,
  } = order || {};
  console.log(order);
  const totalPrice = orders?.reduce(
    (acc, cur) => acc + cur.amount * cur.singleprice,
    0
  );
  if (isLoading) return <Spinner />;
  return (
    <StyledOrderLayout>
      <p>Sn. {fullname}</p>
      <h2>#{id} numaralı siparişinizin detayları</h2>
      <div>
        <OrderStatus type={status} />
      </div>
      {orders.map((orderRow) => (
        <OrderRow key={orderRow.id}>
          <span>{orderRow.products.productname}</span>
          <span>
            {orderRow.amount} x {orderRow.singleprice}TL
          </span>
        </OrderRow>
      ))}
      <TotalTag>Toplam Fiyat: {totalPrice} TL</TotalTag>
    </StyledOrderLayout>
  );
}

export default OrderLayout;
