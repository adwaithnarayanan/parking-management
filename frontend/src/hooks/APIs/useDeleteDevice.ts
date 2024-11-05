import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDevice } from "../../../API";

export const useDeleteDevice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDevice,
    onSuccess: (success) => {
      queryClient.invalidateQueries({ queryKey: ["devices"] });
      console.log(success);
    },
  });
};
