const SEARCH_CACHE = 'search_cache'

export const localStorageManager = {
  GET: () => {
    return localStorage.get(SEARCH_CACHE)
  },
  SET: (cacheData: object[]) => {
    return localStorage.set(SEARCH_CACHE, cacheData)
  },
  DELETE: () => {
    return localStorage.removeItem(SEARCH_CACHE)
  },
}
