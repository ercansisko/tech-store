import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries("user");
      navigate("/login");
      window.location.reload();
    },
  });
  return { mutate, isLoading };
}
