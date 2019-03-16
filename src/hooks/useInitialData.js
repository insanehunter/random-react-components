import { useEffect } from 'react'
import useApi from './useApi'

const useInitialData = (apiPath, params = {}) => {
  const [request, data, error] = useApi(apiPath, params)

  useEffect(() => {
    request()
  }, [])

  return [data, error, request]
}

export default useInitialData
