export const localStorageManager = {
  GET: (key: string): string | null => {
    return localStorage.getItem(key)
  },
  SET: (key: string, cacheData: object[]) => {
    return localStorage.setItem(key, JSON.stringify(cacheData))
  },
  DELETE: (key: string) => {
    return localStorage.removeItem(key)
  },
}
