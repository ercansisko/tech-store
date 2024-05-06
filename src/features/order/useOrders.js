import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/orders";

export function useOrders() {
  const { data, isLoading } = useQuery({
    queryFn: getOrders,
    queryKey: ["orders"],
  });
  return { data, isLoading };
}
