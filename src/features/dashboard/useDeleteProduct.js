import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services/products";
import toast from "react-hot-toast";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteFn } = useMutation({
    mutationFn: deleteProduct,
    mutationKey: ["products"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("ürün başarıyla silindi");
    },
    onError: () => toast.error("ürün silinirken hata oluştu"),
  });
  return { isLoading, deleteFn };
}
