import { HttpException } from "../exceptions/httpExceptions.js";
import { Camera } from "../models/camera.model.js";
import { EventLog } from "../models/EventLog.model.js";
import { dataFormatter } from "../utils/dataFormatter.js";
import { markEntry, markExit } from "./entryExit.service.js";

export const getEventLogFromDb = async () => {
  const data = (await EventLog.findAll({ attributes: ["id", "eventLog"] })).map(
    (event) => event.dataValues
  );

  const events = dataFormatter(data);

  if (data) return events;
  else
    throw new HttpException({
      message: "Unable to fetch events",
      statusCode: 403,
    });
};

export const addEventLogIntoDb = async (eventObj: any) => {
  const externalCamId = Number(eventObj.log.extras.ac_external_camera_id);
  const camera = (await Camera.findByPk(externalCamId))?.dataValues;

  const eventLog = {
    eventLog: {
      cameraId: externalCamId,
      timeStamp: eventObj.log.info.event_timestamp,
      identifierId: eventObj.log.event.name,
      externalCamId: eventObj.log.event.external_camera_id,
    },
  };

  const response = await EventLog.create({
    ...eventObj,
    ...eventLog,
    cameraId: camera ? externalCamId : null,
  });
  const event = dataFormatter([{ ...response.dataValues }]);

  if (camera?.cameraType === "entry")
    markEntry({
      identifierId: event[0].log.event.name,
      entryTime: new Date(Number(event[0].log.info.event_timestamp)),
      exitTime: null,
      invalidatedAt: null,
    });
  else if (camera?.cameraType === "exit") {
    markExit({
      identifierId: event[0].log.event.name,
      exitTime: new Date(Number(event[0].log.info.event_timestamp)),
      invalidatedAt: null,
    });
  }
  if (event) return;
  else
    throw new HttpException({
      message: "Unable to add Event",
      statusCode: 403,
    });
};
