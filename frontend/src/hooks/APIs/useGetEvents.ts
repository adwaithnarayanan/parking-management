import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../../API";

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
};
