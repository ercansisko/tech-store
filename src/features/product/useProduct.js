import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/products";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });
  if (error) console.log(error);
  return { product, isLoading };
}
