import { useState } from 'react'

const useDebounce = () => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>()

  const dispatchDebounce = (callback: () => void) => {
    const delay = 200

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
