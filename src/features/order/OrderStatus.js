import Status from "../../ui/Status";

function OrderStatus({ type }) {
  return (
    <Status type={type}>
      Sipariş{" "}
      {type === "pending"
        ? "Onay Bekliyor"
        : type === "approved"
        ? "Onaylandı"
        : type === "shipped"
        ? "Kargoya verildi"
        : "hata"}
    </Status>
  );
}
export default OrderStatus;
