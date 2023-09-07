import React, { createContext, useState } from 'react'

export type InputModalContextType = {
  isModal: boolean
  updateIsModal: (data: boolean) => void
}

type InputModalProviderProps = {
  children: React.ReactNode
}

export const InputModalContext = createContext<InputModalContextType | boolean>(
  false,
)

const InputModalProvider: React.FC<InputModalProviderProps> = ({
  children,
}) => {
  const [isModal, setIsModal] = useState(false)

  const updateIsModal = (data: boolean) => {
    setIsModal(data)
  }

  return (
    <InputModalContext.Provider value={{ isModal, updateIsModal }}>
      {children}
    </InputModalContext.Provider>
  )
}

export default InputModalProvider
