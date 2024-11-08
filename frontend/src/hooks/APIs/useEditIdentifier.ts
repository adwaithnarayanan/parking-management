import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIdentifier } from "../../../API";

export const useEditIdentifier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateIdentifier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["identifiers"] });
    },
  });
};
