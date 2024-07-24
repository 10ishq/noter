"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseInterceptor = (req, res, next) => {
    res.success = (data, message) => {
        const response = {
            success: true,
            data,
            message
        };
        res.json(response);
    };
    res.error = (error, message) => {
        const response = {
            success: false,
            error,
            message
        };
        res.status(500).json(response);
    };
    next();
};
exports.default = responseInterceptor;
