import { shouldBeNum, shouldBeStr } from "./constants"

export const areNumbers = args => {
  const arrayOfArgs = [...args]
  const truthies = arrayOfArgs.filter(arg => {
    return typeof arg === "number"
  })
  return truthies.length === arrayOfArgs.length
}

export const areStrings = args => {
  const arrayOfArgs = [...args]
  const truthies = arrayOfArgs.filter(arg => {
    return typeof arg === "string"
  })
  return truthies.length === arrayOfArgs.length
}

export const areArrays = args => {
  const arrayOfArgs = [...args]
  const truthies = arrayOfArgs.filter(arg => {
    return typeof arg === "array"
  })
  return truthies.length === arrayOfArgs.length
}

export const areObjects = args => {
  const arrayOfArgs = [...args]
  const truthies = arrayOfArgs.filter(arg => {
    return typeof arg === "object"
  })
  return truthies.length === arrayOfArgs.length
}
