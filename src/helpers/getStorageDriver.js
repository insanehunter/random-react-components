function getStorageDriver(storageKey) {
  return {
    get value() {
      return localStorage.getItem(storageKey)
    },
    set value(newValue) {
      localStorage.setItem(storageKey, newValue)
    }
  }
}

export default getStorageDriver
