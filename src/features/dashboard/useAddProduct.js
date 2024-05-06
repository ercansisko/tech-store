import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../services/products";
import toast from "react-hot-toast";
export function useAddProduct() {
  const queryClient = useQueryClient();
  const { mutate, isPending: isAdding } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("ürün başarıyla eklendi");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: () => toast.error("ürün eklenemedi!"),
  });
  return { mutate, isAdding };
}
