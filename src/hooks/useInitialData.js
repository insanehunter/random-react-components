import { useEffect } from 'react'
import useApi from './useApi'

const useInitialData = (apiPath, params = {}) => {
  const [request, data, error, , resetError] = useApi(apiPath, params)

  useEffect(() => {
    request()
  }, [])

  return [data, error, resetError]
}

export default useInitialData
