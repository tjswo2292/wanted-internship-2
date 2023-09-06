import React, { createContext, useState } from 'react'

export type SearchKeywordContextType = {
  searchKeywordList: object[]
  setSearchKeywordList: React.Dispatch<React.SetStateAction<object[]>>
}

type SearchKeywordProviderProps = {
  children: React.ReactNode
}

export const SearchKeywordContext =
  createContext<SearchKeywordContextType | null>(null)

const SeachKeywordProvider: React.FC<SearchKeywordProviderProps> = ({
  children,
}) => {
  const [searchKeywordList, setSearchKeywordList] = useState<object[]>([])

  return (
    <SearchKeywordContext.Provider
      value={{ searchKeywordList, setSearchKeywordList }}
    >
      {children}
    </SearchKeywordContext.Provider>
  )
}

export default SeachKeywordProvider
