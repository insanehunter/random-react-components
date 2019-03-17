function getStorageDriver(storageKey) {
  return {
    get value() {
      return localStorage.getItem(storageKey)
    },
    save(newValue) {
      localStorage.setItem(storageKey, newValue)
    }
  }
}

export default getStorageDriver
