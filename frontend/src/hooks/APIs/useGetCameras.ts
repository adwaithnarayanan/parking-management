import { useQuery } from "@tanstack/react-query";
import { getCameras } from "../../../API";

export const useGetCameras = (deviceId: number) => {
  return useQuery({
    queryKey: ["cameras", deviceId],
    queryFn: async () => await getCameras({ deviceId }),
  });
};
