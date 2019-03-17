import { useState } from 'react'
import fetchData from '../helpers/fetchData'

const useApi = (path, params = {}, method = 'GET') => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoadingStatus] = useState(false)

  function request() {
    resetState()
    setLoadingStatus(true)
    fetchData(path, params, method)
      .then(parsedData => setData(parsedData))
      .catch(error => setError(error))
      .finally(() => setLoadingStatus(false))
  }

  function resetState() {
    if (data) setData(null)
    if (error) setError(null)
  }

  function resetError() {
    if (error) setError(null)
  }

  return [request, data, error, loading, resetError]
}

export default useApi
