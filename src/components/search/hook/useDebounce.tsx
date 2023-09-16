import { useState } from 'react'
import { DEBOUNCE_DELAY_TIME } from '../../../util/consts'

const useDebounce = () => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>()

  const dispatchDebounce = (callback: () => void) => {
    const delay = DEBOUNCE_DELAY_TIME

    if (timer) {
      clearTimeout(timer)
    }

    const newTimer = setTimeout(() => {
      callback()
    }, delay)

    setTimer(newTimer)
  }

  return [dispatchDebounce]
}

export default useDebounce
