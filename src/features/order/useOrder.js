import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/orders";
import { useParams } from "react-router-dom";

export function useOrder() {
  const { orderId } = useParams();
  const { data: order, isLoading } = useQuery({
    queryKey: ["orderdetails"],
    queryFn: () => getOrder(orderId),
  });
  return { order, isLoading };
}
