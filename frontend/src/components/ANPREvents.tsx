import { useGetEvents } from "../hooks/APIs/useGetEvents";
import EventsSection from "./EventsSection";

const ANPREvents = () => {
  const { data: events } = useGetEvents();

  return (
    <main className="overflow-y-auto overflow-x-hidden p-10 h-full">
      <h1 className="ml-5 text-xl font-medium">ANPR Events</h1>
      {events && <EventsSection events={events?.data} />}{" "}
    </main>
  );
};

export default ANPREvents;
