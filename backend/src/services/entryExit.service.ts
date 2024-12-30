import { EntryExitLog } from "../models/EntryExitLog.model.js";

export const markEntry = async (entryObj: any) => {
  const findLog = (
    await EntryExitLog.findOne({
      where: { identifierId: entryObj.identifierId },
      order: [["id", "DESC"]],
    })
  )?.dataValues;

  if (!findLog) {
    await EntryExitLog.create({ ...entryObj });
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

    await EntryExitLog.create({ ...entryObj });
  } else if (
    (findLog?.entryTime && findLog.exitTime) ||
    (!findLog.entryTime && findLog.exitTime)
  ) {
    await EntryExitLog.create({ ...entryObj });
  }
};

export const markExit = async (exitObj: any) => {
  const findLog = await EntryExitLog.findOne({
    where: { identifierId: exitObj.identifierId },
    order: [["id", "DESC"]],
  });

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
  } else {
    await EntryExitLog.create({
      identifierId: exitObj.identifierId,
      entryTime: null,
      exitTime: exitObj.exitTime,
      invalidatedAt: new Date(),
    });
  }
};
