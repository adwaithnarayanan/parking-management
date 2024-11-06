import express from "express";
import {
  addIdentifier,
  deleteIdentifier,
  editIdentifier,
  getIdentifier,
} from "../controllers/identifier.controller.js";
import { validationMiddleware } from "../middleware/validation.middleware.js";
import {
  addIdentifierSchema,
  deleteIdentifierSchema,
  editIdentifierSchema,
} from "../schemas/identifier.schema.js";
import { paramsValidation } from "../middleware/validation.params.middleware.js";

const identifierRouter = express.Router();

identifierRouter.post(
  "/",
  validationMiddleware(addIdentifierSchema),
  addIdentifier
);
identifierRouter.get("/", getIdentifier);
identifierRouter.put(
  "/",
  validationMiddleware(editIdentifierSchema),
  editIdentifier
);
identifierRouter.delete(
  "/:id",
  paramsValidation(deleteIdentifierSchema),
  deleteIdentifier
);

export { identifierRouter };
