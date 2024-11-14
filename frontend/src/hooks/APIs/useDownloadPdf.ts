import { useQuery } from "@tanstack/react-query";
import { donwloadPdf } from "../../../API";

export const useDownloadPdf = () => {
  return useQuery({
    queryKey: ["pdf"],
    queryFn: donwloadPdf,
    enabled: false,
    refetchOnWindowFocus: false,
  });
};
