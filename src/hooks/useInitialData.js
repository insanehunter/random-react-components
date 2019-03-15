import { useEffect } from 'react'
import useApi from './useApi'

const useInitialData = (apiPath, params = {}) => {
  const [sendRequest, data, error, , reload] = useApi(apiPath, params)

  useEffect(() => {
    if (data || error) return
    sendRequest()
  }, [data, error])

  return [data, error, reload]
}

export default useInitialData
