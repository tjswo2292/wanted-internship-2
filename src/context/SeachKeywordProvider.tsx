import React, { createContext, useState } from 'react'

export type SearchKeywordContextType = {
  searchKeywordList: object[]
  updateKeywordList: (data: object[]) => void
  includeKeyword: object[]
  updateIncludeKeyword: (data: object[]) => void
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
  const [includeKeyword, setIncludeKeyword] = useState<object[]>([])

  const updateKeywordList = (data: object[]) => {
    setSearchKeywordList(data)
  }

  const updateIncludeKeyword = (data: object[]) => {
    setIncludeKeyword(data)
  }

  return (
    <SearchKeywordContext.Provider
      value={{
        searchKeywordList,
        updateKeywordList,
        includeKeyword,
        updateIncludeKeyword,
      }}
    >
      {children}
    </SearchKeywordContext.Provider>
  )
}

export default SeachKeywordProvider
