import { EventType } from "../../types";
import EventCard from "./EventCard";

type EventsSectionPropsType = {
  events: EventType[];
};

const EventsSection = ({ events }: EventsSectionPropsType) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
