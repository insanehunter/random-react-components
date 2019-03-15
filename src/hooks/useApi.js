import { useState } from 'react'
import fetchData from '../helpers/fetchData'

const useApi = (path, params, method) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoadingStatus] = useState(false)

  function sendRequest() {
    setLoadingStatus(true)
    fetchData(path, params, method)
      .then(parsedData => setData(parsedData))
      .catch(error => setError(error))
      .finally(() => setLoadingStatus(false))
  }

  function reload() {
    if (data) setData(null)
    if (error) setError(null)
  }

  return [sendRequest, data, error, loading, reload]
}

export default useApi
