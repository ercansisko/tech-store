import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFilteredProducts } from "../../services/products";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../constants";

export function useFilteredProducts() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const pageNum = Number(searchParams.get("page")) || 1;
  const types = {
    filter: "type",
    arr: searchParams.get("type")?.split("-"),
  };
  const brands = {
    filter: "brand",
    arr: searchParams.get("brand")?.split("-"),
  };
  const orderBy = searchParams.get("orderBy");
  const searchQuery = searchParams.get("search");
  const { data: { data: products, count } = {}, isLoading } = useQuery({
    queryKey: ["products", types, brands, pageNum, searchQuery, orderBy],
    queryFn: () =>
      getFilteredProducts(types, brands, pageNum, searchQuery, orderBy),
    onError: () => {
      console.log("hata oluştu");
    },
    onSuccess: () => {
      console.log("başarılı");
    },
  });
  if (pageNum > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", types, brands, pageNum - 1, searchQuery, orderBy],
      queryFn: () =>
        getFilteredProducts(types, brands, pageNum, searchQuery, orderBy),
    });
  if (pageNum < Math.ceil(count / PAGE_SIZE))
    queryClient.prefetchQuery({
      queryKey: ["products", types, brands, pageNum + 1, searchQuery, orderBy],
      queryFn: () =>
        getFilteredProducts(types, brands, pageNum, searchQuery, orderBy),
    });
  return { products, count, isLoading };
}
