import styled from "styled-components";
import OrderStatus from "./OrderStatus";
import Button from "../../ui/Button";
import { useUpdateStatus } from "./useUpdateStatus";
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  border-bottom: 1px solid var(--color-grey-300);
  & span {
    display: block;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid var(--color-grey-200);
    font-style: italic;
  }
`;
function TableRow({ order }) {
  const {
    id,
    created_at,
    customers: { address, fullname, phonenumber } = {},
    orderdetails,
    status: currentStatus,
  } = order || {};
  const { mutate: updateStatus, isLoading: isUpdating } = useUpdateStatus();

  const totalPrice = orderdetails?.reduce(
    (acc, cur) => acc + cur.amount * cur.singleprice,
    0
  );
  const changeStatus = () => {
    updateStatus({ currentStatus, id });
  };
  return (
    <Row>
      <p>{id}</p>
      <p>{new Date(created_at).toLocaleDateString("tr-TR")}</p>
      <p>
        <OrderStatus type={currentStatus} />
      </p>
      <p>{fullname}</p>
      <p>{address}</p>
      <p>{phonenumber}</p>
      <p>
        {orderdetails.map((orderdetail) => (
          <span key={orderdetail.id}>
            {orderdetail.amount} x {orderdetail.products.productname}
          </span>
        ))}
      </p>
      <p>{totalPrice} TL</p>
      <p>
        {(currentStatus === "pending" || currentStatus === "approved") && (
          <Button disabled={isUpdating} onClick={changeStatus} color="blue">
            {currentStatus === "pending" ? "siparişi onayla" : "Kargoya ver"}
          </Button>
        )}
      </p>
    </Row>
  );
}

export default TableRow;
