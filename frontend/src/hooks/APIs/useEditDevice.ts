import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDevice } from "../../../API";

export const useEditDevice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editDevice,
    onSuccess: (success) => {
      console.log(success);
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });
};
