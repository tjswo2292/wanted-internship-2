import { useState } from 'react'
import { IconHookType } from './type'

const useSearchIcon = (): IconHookType => {
  const [isShowSearchIcon, setIsShowSearchIcon] = useState(true)

  const changeSearchIconShow = () => {
    setIsShowSearchIcon((prev) => !prev)
  }

  return [isShowSearchIcon, changeSearchIconShow]
}

export default useSearchIcon
