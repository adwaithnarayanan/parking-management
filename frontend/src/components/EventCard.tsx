import { EventType } from "../../types";

type EventCardPropsType = {
  event: EventType;
};

const EventCard = ({ event }: EventCardPropsType) => {
  const timeStamp = new Date(Number(event.eventLog.timeStamp));

  return (
    <div className="shadow-lg p-3 m-4 bg-slate-100 rounded-md hover:shadow-xl">
      <div className="flex flex-col p-2">
        <span className="text-slate-700">
          Camera name:
          <span className="text-black font-medium ml-2">
            {event.eventLog.externalCamId}
          </span>
        </span>
        <span className="text-slate-700">
          Camera ID: #
          <span className="text-black font-medium ml-1">
            {event.eventLog.cameraId}
          </span>
        </span>
        <span className="text-slate-700">
          Identifier ID:
          <span className="text-black font-medium ml-2">
            {event.eventLog.identifierId}
          </span>
        </span>
        <span className="text-slate-700">
          Date:
          <span className="text-black font-medium ml-2">
            {timeStamp.toDateString()}
          </span>
        </span>
        <span className="text-slate-700">
          Time:
          <span className="text-black font-medium ml-2">
            {timeStamp.toLocaleTimeString()}
          </span>
        </span>
      </div>
      <div className="flex">
        {event.eventLog.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={event.eventLog.identifierId}
            className="w-1/2 m-2 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
