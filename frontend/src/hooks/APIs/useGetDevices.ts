import { useQuery } from "@tanstack/react-query";
import { getAllDevices } from "../../../API";

export const useGetDevices = () => {
  return useQuery({
    queryKey: ["devices"],
    queryFn: getAllDevices,
  });
};
