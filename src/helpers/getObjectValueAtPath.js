function getObjectValueAtPath(object, path, defaultValue = null) {
  const result = object == null ? undefined : baseGet(object, path)
  return result === undefined ? defaultValue : result
}

function baseGet(object, path) {
  let index = 0
  const keys = path.split('.')
  const length = keys.length

  while (object != null && index < length) {
    object = object[keys[index++]]
  }

  return (index && index === length) ? object : undefined
}

export default getObjectValueAtPath
