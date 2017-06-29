export const areTypes = (args, types) => [...args].every((arg, i) => typeof arg === types[i])
