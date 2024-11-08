import { useQuery } from "@tanstack/react-query";
import { getIdentifiers } from "../../../API";

export const useGetIdentifiers = () => {
  return useQuery({
    queryKey: ["identifiers"],
    queryFn: getIdentifiers,
  });
};
