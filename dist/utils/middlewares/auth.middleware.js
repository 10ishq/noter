"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token === 'mGvwy6P7pE2SNN6iaExpKjIGBGUfZpLW') {
        next();
    }
    else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.default = authMiddleware;
