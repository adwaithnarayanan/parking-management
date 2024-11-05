import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCamera } from "../../../API";

export const useAddCamera = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCamera,
    onSuccess: (message) => {
      console.log("**", message);
      queryClient.invalidateQueries({
        queryKey: ["cameras", message.data.deviceId],
      });
    },
  });
};
