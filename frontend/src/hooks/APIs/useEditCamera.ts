import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCamera } from "../../../API";

export const useEditCamera = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editCamera,
    onSuccess: (message) => {
      console.log(message);
      queryClient.invalidateQueries({
        queryKey: ["cameras", message.data.deviceId],
      });
    },
  });
};
