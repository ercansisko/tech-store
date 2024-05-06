import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "../../services/orders";
import toast from "react-hot-toast";

export function useUpdateStatus() {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ currentStatus, id }) => updateStatus({ currentStatus, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      toast.success("sipariş durumu güncellendi");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return { isLoading, mutate };
}
