import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addIdentifer } from "../../../API";

export const useAddIdentifier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addIdentifer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["identifiers"] });
    },
  });
};
