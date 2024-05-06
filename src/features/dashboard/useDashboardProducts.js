import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";

export function useDashboardProducts() {
  const { data: filteredProducts, isLoading: isFilteredLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts("phone"),
  });

  return { filteredProducts, isFilteredLoading };
}
