"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children, className = _a.className;
    return (react_1.default.createElement("button", { className: className }, children));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map