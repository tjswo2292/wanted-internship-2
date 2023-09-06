import { useState } from 'react'
import { IconHookType } from './type'

const useCancelButton = (): IconHookType => {
  const [isCancelBtnShow, setIsCancelBtnShow] = useState(false)

  const changeCancelBtnShow = () => {
    setIsCancelBtnShow((prev) => !prev)
  }

  return [isCancelBtnShow, changeCancelBtnShow]
}

export default useCancelButton
