import { z } from "zod";

export const addIdentifierSchema = z.object({
  identifierId: z.string(),
  licensePlate: z.string().min(1),
  parkingId: z.string(),
  organizationName: z.string(),
  vehicleType: z.string().min(1),
  ownerName: z.union([z.string().length(0), z.string().min(1)]),
  ownerEmail: z.string(),
  validFrom: z.string(),
  validUpTo: z.string(),
});

const editSchemaId = z.object({ id: z.number().min(1), type: z.string() });

export const editIdentifierSchema = editSchemaId.merge(addIdentifierSchema);

export const deleteIdentifierSchema = z.object({ id: z.number().min(1) });
