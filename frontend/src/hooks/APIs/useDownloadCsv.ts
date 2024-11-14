import { useQuery } from "@tanstack/react-query";
import { downloadCsv } from "../../../API";

export const useDownloadCsv = () => {
  return useQuery({
    queryKey: ["csv"],
    queryFn: downloadCsv,
    enabled: false,
    refetchOnWindowFocus: false,
  });
};
