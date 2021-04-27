"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = exports.colorsDefault = void 0;
exports.colorsDefault = {
    primary: {
        noverde: '#0CD15B',
        acqua: '#00FFB2',
        galaxy: '#0C0F25',
        text: '#646E7D'
    },
    secondary: {},
    neutrals: {
        white: '#ffffff',
        gray100: '#F9FAFD',
        gray300: '#E2E2E2',
        gray500: '#AAABB6',
        gray700: '#666666'
    },
    feedback: {
        warning: {
            orange500: '#FF9900'
        },
        error: {
            red500: '#FB0000'
        }
    }
};
exports.colors = __assign(__assign({}, exports.colorsDefault), { allColors: {
        noverde: '#0CD15B',
        acqua: '#00FFB2',
        galaxy: '#0C0F25',
        text: '#646E7D',
        white: '#ffffff',
        gray100: '#F9FAFD',
        gray300: '#E2E2E2',
        gray500: '#AAABB6',
        gray700: '#666666',
        orange500: '#FF9900',
        red500: '#FB0000'
    } });
//# sourceMappingURL=colors.js.map