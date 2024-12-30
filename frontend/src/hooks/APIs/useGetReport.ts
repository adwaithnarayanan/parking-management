import { useQuery } from "@tanstack/react-query";
import { getReport } from "../../../API";

export const useGetReport = () => {
  return useQuery({
    queryKey: ["report"],
    queryFn: getReport,
  });
};
