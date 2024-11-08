import { constants } from "../constants.js";
const errorHandler = (err, req, res, _next) => {
    const statusCode = err.statusCode;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(constants.VALIDATION_ERROR).send({
                title: "Validation  failed",
                status: constants.VALIDATION_ERROR,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.status(constants.NOT_FOUND).send({
                title: "Not found",
                status: constants.NOT_FOUND,
                succes: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(constants.UNAUTHORIZED).send({
                title: "Un-Authorized",
                status: constants.UNAUTHORIZED,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.status(constants.FORBIDDEN).send({
                title: "Forbidden",
                status: constants.FORBIDDEN,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            res.status(constants.SERVER_ERROR).send({
                title: "Server Error",
                status: constants.SERVER_ERROR,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};
export { errorHandler };
//# sourceMappingURL=errorHandler.js.map