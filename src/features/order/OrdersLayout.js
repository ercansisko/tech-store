import styled from "styled-components";
import { useOrders } from "./useOrders";
import Spinner from "../../ui/Spinner";
import TableRow from "./TableRow";
import { useState } from "react";
import FilterLabel from "../../ui/FilterLabel";
const Container = styled.div`
  width: 80%;
  margin: 10rem auto;
`;
const Table = styled.div`
  padding: 1rem 2rem 15rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 1rem;
  background-color: var(--color-grey-50);
`;
const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;
const FilterGroups = styled.div`
  border: none;
  display: flex;
  justify-content: flex-end;
`;
const Heading = styled.h4``;
function OrdersLayout() {
  const { data: orders, isLoading } = useOrders();
  const [filter, setFilter] = useState("");
  const filteredOrders =
    filter !== "" ? orders?.filter((order) => order.status === filter) : orders;

  if (isLoading) return <Spinner />;
  return (
    <Container>
      <FilterGroups>
        <FilterLabel onClick={() => setFilter("")} color="indigo">
          Tümü
        </FilterLabel>
        <FilterLabel onClick={() => setFilter("pending")} color="grey">
          Onay Bekleyenler
        </FilterLabel>
        <FilterLabel onClick={() => setFilter("approved")} color="blue">
          Onaylananlar
        </FilterLabel>
        <FilterLabel onClick={() => setFilter("shipped")} color="green">
          Kargoya verilenler
        </FilterLabel>
      </FilterGroups>
      <Table>
        <HeaderRow>
          <Heading>Sipariş No</Heading>
          <Heading>Sipariş Tarihi</Heading>
          <Heading>Durum </Heading>
          <Heading>İsim </Heading>
          <Heading>Adres </Heading>
          <Heading>Telefon </Heading>
          <Heading>Siparişler </Heading>
          <Heading>Toplam Fiyat </Heading>
          <Heading>İşlem </Heading>
        </HeaderRow>
        {filteredOrders.map((order) => (
          <TableRow key={order.id} order={order} />
        ))}
      </Table>
    </Container>
  );
}

export default OrdersLayout;
