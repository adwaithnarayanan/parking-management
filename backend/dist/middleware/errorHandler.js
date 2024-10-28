import { constants } from "../constants.js";
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation  failed",
                status: constants.VALIDATION_ERROR,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                status: constants.NOT_FOUND,
                succes: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Un-Authorized",
                status: constants.UNAUTHORIZED,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                status: constants.FORBIDDEN,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                status: constants.SERVER_ERROR,
                success: false,
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("No Error");
            break;
    }
};
export { errorHandler };
//# sourceMappingURL=errorHandler.js.map