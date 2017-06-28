"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areObjects = exports.areArrays = exports.areStrings = exports.areNumbers = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = require("./constants");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var areNumbers = exports.areNumbers = function areNumbers(args) {
  var arrayOfArgs = [].concat(_toConsumableArray(args));
  var truthies = arrayOfArgs.filter(function (arg) {
    return typeof arg === "number";
  });
  return truthies.length === arrayOfArgs.length;
};

var areStrings = exports.areStrings = function areStrings(args) {
  var arrayOfArgs = [].concat(_toConsumableArray(args));
  var truthies = arrayOfArgs.filter(function (arg) {
    return typeof arg === "string";
  });
  return truthies.length === arrayOfArgs.length;
};

var areArrays = exports.areArrays = function areArrays(args) {
  var arrayOfArgs = [].concat(_toConsumableArray(args));
  var truthies = arrayOfArgs.filter(function (arg) {
    return typeof arg === "array";
  });
  return truthies.length === arrayOfArgs.length;
};

var areObjects = exports.areObjects = function areObjects(args) {
  var arrayOfArgs = [].concat(_toConsumableArray(args));
  var truthies = arrayOfArgs.filter(function (arg) {
    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object";
  });
  return truthies.length === arrayOfArgs.length;
};