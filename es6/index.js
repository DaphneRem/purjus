import { areTypes } from "./typechecks"
import { shouldBeNum, shouldBeStr } from "./constants"

const PurJus = {
	maths: {
		addTwoNumbers(firstNum, secondNum) {
			return areTypes(arguments, ["number", "number"]) ? firstNum + secondNum : shouldBeNum
		},
		substractTwoNumbers(firstNum, secondNum) {
			return areTypes(arguments, ["number", "number"]) ? firstNum - secondNum : shouldBeNum
		},
		multiplyTwoNumbers(firstNum, secondNum) {
			return areTypes(arguments, ["number", "number"]) ? firstNum * secondNum : shouldBeNum
		},
		divideTwoNumbers(firstNum, secondNum) {
			return areTypes(arguments, ["number", "number"]) ? firstNum / secondNum : shouldBeNum
		}
	},
	style: {
		changeColor(id, color) {
			areTypes(arguments, ["string", "string"]) ? document.getElementById(id).style.color = color : shouldBeStr
		}
	}
}

export default PurJus
