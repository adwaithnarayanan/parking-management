import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteIdentifier } from "../../../API";

export const useDeleteIdentifier = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteIdentifier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["identifiers"] });
    },
  });
};
