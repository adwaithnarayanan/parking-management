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
  const response = await Identifier.create({ ...identifierObj });

  const identifier = dataFormatter([{ ...response.dataValues }]);

  if (identifier) return identifier;
  else throw new Error("Unable to add Identifier");
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
  } else throw new Error("Unable to update data");
}

export async function deleteIdentiferInDb(id: number) {
  const response = await Identifier.destroy({ where: { id: id } });
  if (response) {
    return { message: "Successfully deleted" };
  } else {
    throw new Error("Unable to delete Identifier");
  }
}
