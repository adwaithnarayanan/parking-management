import { EntryExitLog } from "../models/EntryExitLog.model.js";

export const markEntry = async (entryObj: any) => {
  let response: { id: number };
  const findLog = (
    await EntryExitLog.findOne({
      where: { identifierId: entryObj.identifierId },
      order: [["id", "DESC"]],
    })
  )?.dataValues;

  if (!findLog) {
    response = (await EntryExitLog.create({ ...entryObj })).dataValues;
  } else if (findLog?.entryTime && !findLog.exitTime) {
    await EntryExitLog.update(
      { exitTime: null, invalidatedAt: new Date() },
      {
        where: {
          identifierId: entryObj.identifierId,
          id: findLog.id,
        },
      }
    );

    response = (await EntryExitLog.create({ ...entryObj })).dataValues;
  } else if (
    (findLog?.entryTime && findLog.exitTime) ||
    (!findLog.entryTime && findLog.exitTime)
  ) {
    response = (await EntryExitLog.create({ ...entryObj })).dataValues;
  }

  return response!.id;
};

export const markExit = async (exitObj: any) => {
  const findLog = await EntryExitLog.findOne({
    where: { identifierId: exitObj.identifierId },
    order: [["id", "DESC"]],
  });

  let response;

  if (findLog && findLog.entryTime !== null && findLog.exitTime === null) {
    await EntryExitLog.update(
      { exitTime: exitObj.exitTime },
      {
        where: {
          identifierId: exitObj.identifierId,
          exitTime: null,
          id: findLog.id,
        },
      }
    );
    response = findLog.id;
  } else {
    response = (
      await EntryExitLog.create({
        identifierId: exitObj.identifierId,
        entryTime: null,
        exitTime: exitObj.exitTime,
        invalidatedAt: new Date(),
      })
    ).dataValues.id;
  }
  return response;
};
