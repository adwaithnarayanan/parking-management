import { identifier } from "@sequelize/core/_non-semver-use-at-your-own-risk_/expression-builders/identifier.js";
import { z } from "zod";

export const addIdentifierSchema = z.object({
  identifierId: z.string().min(1).optional(),
  licensePlate: z.string().min(2),
  parkingId: z.number().int().min(1),
  organizationName: z.string().min(1),
  vehicleType: z.string().min(1),
  ownerName: z.union([z.string().length(0), z.string().min(1)]).optional(),
  ownerEmail: z.string().optional(),
  validFrom: z.coerce.date().optional(),
  validUpTo: z.coerce.date().optional(),
});

const editSchemaId = z.object({ id: z.number().min(1), type: z.string() });

export const editIdentifierSchema = editSchemaId.merge(addIdentifierSchema);

export const deleteIdentifierSchema = z.object({ id: z.number().min(1) });
 