import React, { createContext, useState } from 'react'

export type InputModalContextType = {
  isModal?: boolean
  setIsModal?: React.Dispatch<React.SetStateAction<boolean>>
}

type InputModalProviderProps = {
  children: React.ReactNode
}

export const InputModalContext = createContext<InputModalContextType>({})

const InputModalProvider: React.FC<InputModalProviderProps> = ({
  children,
}) => {
  const [isModal, setIsModal] = useState(false)

  return (
    <InputModalContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </InputModalContext.Provider>
  )
}

export default InputModalProvider
