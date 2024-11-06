import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDevice } from "../../../API";

export const useAddDevice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addDevice,
    onSuccess: (message) => {
      console.log(message);
      queryClient.invalidateQueries({ queryKey: ["devices"] });
      // queryClient.invalidateQueries({ queryKey: ["cameras"] });
      queryClient.invalidateQueries({ queryKey: ["cameras", message.data.id] });
      // queryClient.invalidateQueries({
      //   predicate: (query) =>
      //     query.queryKey.every((key: any) => ["cameras"].includes(key)),
      // });
    },
  });
};
