const defaultInit = {
  credentials: 'same-origin'
}

const getPostInit = params => ({
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
})

function fetchData(path, params = {}, method = 'GET') {
  const [apiPath, init] = prepareRequestData(path, params, method)
  return fetch(apiPath, init).then(response => response.json())
}

function prepareRequestData(path, params, method) {
  switch (method) {
    case 'POST': return [path, getPostInit(params)]
    default: return [path + serializeParamsToQueryString(params), defaultInit] // GET
  }
}

function serializeParamsToQueryString(params) {
  const queryString = Object.getOwnPropertyNames(params).reduce((result, key) => {
    const encodedValue = encodeURIComponent(params[key])
    result += `${key}=${encodedValue}&`
    return result
  }, '')

  return queryString.length ? ('?' + queryString.slice(0, -1)) : ''
}

export default fetchData
