"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Heading = exports.Button = void 0;
var Button_1 = __importDefault(require("./components/Button"));
exports.Button = Button_1.default;
//Typography
var typographyComponents_1 = require("./components/Typography/typographyComponents");
Object.defineProperty(exports, "Heading", { enumerable: true, get: function () { return typographyComponents_1.Heading; } });
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return typographyComponents_1.Text; } });
