import { EntryExitCameraMap } from "../models/EntryExitCameraMap.js";

export const setMapValues = async (values: any) => {
  await EntryExitCameraMap.create({ ...values });
};

export const getMapValues = async ({ id }: { id: number }) => {
  return (await EntryExitCameraMap.findAll({ where: { entryExitId: id } })).map(
    (values) => values.dataValues
  );
};
