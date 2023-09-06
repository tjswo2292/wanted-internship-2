import { PATH } from './contants'
import { axiosInstance } from './core'

const publicApi = {
  GET: async (searchWord: string) => {
    const response = await axiosInstance.get(`${PATH.SICK}`, {
      params: { q: searchWord },
    })
    return response
  },
}

export { publicApi }
