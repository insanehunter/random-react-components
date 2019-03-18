function getNextInArray(array, currentItem) {
  const currentItemIndex = array.indexOf(currentItem)
  const nextItemIndex = (currentItemIndex + 1) % array.length
  return array[nextItemIndex]
}

export default getNextInArray
