"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Heading = function (_a) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? "h1" : _b, className = _a.className;
    return react_1.default.createElement(as, { className: className }, children);
};
exports.default = Heading;
