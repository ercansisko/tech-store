import { useMutation, useQueryClient } from "@tanstack/react-query";
import { order } from "../../services/orders";
import toast from "react-hot-toast";

export function useAddOrder() {
  const queryClient = useQueryClient();
  const { mutate: orderFn } = useMutation({
    mutationFn: ({ orderObj, cart }) => order({ orderObj, cart }),
    onSuccess: () => {
      toast.success("sipariş oluşturuldu");
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (e) => toast.error(e.message),
  });
  return { orderFn };
}
