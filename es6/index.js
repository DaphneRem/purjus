import { areNumbers } from "./typechecks"
import { shouldBeNum } from "./constants"

const PurJus = {
	addTwoNumbers(firstNum, secondNum) {
		return areNumbers(arguments) ? firstNum + secondNum : shouldBeNum
	},
	substractTwoNumbers(firstNum, secondNum) {
		return areNumbers(arguments) ? firstNum - secondNum : shouldBeNum
	},
	multiplyTwoNumbers(firstNum, secondNum) {
		return areNumbers(arguments) ? firstNum * secondNum : shouldBeNum
	},
  divideTwoNumbers(firstNum, secondNum) {
    return areNumbers(arguments) ? firstNum / secondNum : shouldBeNum
  }
}

export default PurJus
