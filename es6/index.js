import { areTypes } from "./typechecks"
import { shouldBeNum } from "./constants"

const PurJus = {
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
}

export default PurJus
