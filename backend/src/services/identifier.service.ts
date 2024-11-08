import { HttpException } from "../exceptions/httpExceptions.js";
import { Identifier } from "../models/identifier.model.js";
import { EditIdentifierType, IdentifierType } from "../types.js";
import { dataFormatter } from "../utils/dataFormatter.js";

export async function getIdentifiersFromDb() {
  const data = (
    await Identifier.findAll({
      order: ["id"],
    })
  ).map((identifier) => identifier.dataValues);

  const identifers = dataFormatter(data);

  if (data) {
    return identifers;
  } else throw new Error("Unable to fetch data");
}

export async function addIdentifierToDb(identifierObj: IdentifierType) {
  const findVehicle = await Identifier.findAll({
    where: { identifierId: identifierObj.identifierId.trim() },
  });

  if (findVehicle[0])
    throw new HttpException({
      message: "Vehicle already exists",
      statusCode: 403,
    });

  const response = await Identifier.create({ ...identifierObj });

  const identifier = dataFormatter([{ ...response.dataValues }]);
  if (identifier) return identifier;
  else
    throw new HttpException({
      message: "Unable to add Identifier",
      statusCode: 403,
    });
}

export async function updateIdentifierInDb({
  id,
  ...identifierData
}: EditIdentifierType) {
  const response = await Identifier.update(identifierData, {
    where: { id: id },
  });

  if (response[0]) {
    return { id, ...identifierData };
  } else
    throw new HttpException({
      message: "Unable to update data",
      statusCode: 403,
    });
}

export async function deleteIdentiferInDb(id: number) {
  const response = await Identifier.destroy({ where: { id: id } });
  if (response) {
    return { message: "Successfully deleted" };
  } else {
    throw new HttpException({
      message: "Unable to delete Identifier",
      statusCode: 403,
    });
  }
}
