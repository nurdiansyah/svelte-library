"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const core_web_1 = require("@deboxsoft/core-web");
exports.getId = () => {
    return core_web_1.utils.generateId(5);
};
