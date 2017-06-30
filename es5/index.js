"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typechecks = require("./typechecks");

var _constants = require("./constants");

var PurJus = {
	maths: {
		addTwoNumbers: function addTwoNumbers(firstNum, secondNum) {
			return (0, _typechecks.areTypes)(arguments, ["number", "number"]) ? firstNum + secondNum : _constants.shouldBeNum;
		},
		substractTwoNumbers: function substractTwoNumbers(firstNum, secondNum) {
			return (0, _typechecks.areTypes)(arguments, ["number", "number"]) ? firstNum - secondNum : _constants.shouldBeNum;
		},
		multiplyTwoNumbers: function multiplyTwoNumbers(firstNum, secondNum) {
			return (0, _typechecks.areTypes)(arguments, ["number", "number"]) ? firstNum * secondNum : _constants.shouldBeNum;
		},
		divideTwoNumbers: function divideTwoNumbers(firstNum, secondNum) {
			return (0, _typechecks.areTypes)(arguments, ["number", "number"]) ? firstNum / secondNum : _constants.shouldBeNum;
		}
	},
	style: {
		changeColor: function changeColor(id, color) {
			(0, _typechecks.areTypes)(arguments, ["string", "string"]) ? document.getElementById(id).style.color = color : _constants.shouldBeStr;
		}
	}
};

exports.default = PurJus;