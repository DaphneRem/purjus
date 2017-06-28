"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typechecks = require("./typechecks");

var _constants = require("./constants");

var PurJus = {
	addTwoNumbers: function addTwoNumbers(firstNum, secondNum) {
		return (0, _typechecks.areNumbers)(arguments) ? firstNum + secondNum : _constants.shouldBeNum;
	},
	substractTwoNumbers: function substractTwoNumbers(firstNum, secondNum) {
		return (0, _typechecks.areNumbers)(arguments) ? firstNum - secondNum : _constants.shouldBeNum;
	},
	multiplyTwoNumbers: function multiplyTwoNumbers(firstNum, secondNum) {
		return (0, _typechecks.areNumbers)(arguments) ? firstNum * secondNum : _constants.shouldBeNum;
	},
	divideTwoNumbers: function divideTwoNumbers(firstNum, secondNum) {
		return (0, _typechecks.areNumbers)(arguments) ? firstNum / secondNum : _constants.shouldBeNum;
	}
};

exports.default = PurJus;