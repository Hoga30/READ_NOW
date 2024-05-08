import customError from "./customError.js";

/**
 * @class
 * @classdesc Custom error class for 404 Not Found responses.
 * @extends {customError}
 */
export class notFoundError extends customError {
    /**
     * Creates a new NotFoundError instance.
     * @param {string} message - Error message.
     */
    constructor(message) {
        super(message);

        /**
         * HTTP status code for this error.
         * @type {number}
         */
        this.statusCode = 404;
    }
}