import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SearchKeywordItemType = {
  id?: string
  text?: string
}

export type IncludeKeywordItemType = {
  sickCd?: string
  sickNm?: string
}

export type SearchSliceType = {
  searchKeywordList: SearchKeywordItemType[]
  includeKeywordList: IncludeKeywordItemType[]
  searchQuery: string
}

const initialState: SearchSliceType = {
  searchKeywordList: [],
  includeKeywordList: [],
  searchQuery: '',
}

export const seacrhSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<SearchKeywordItemType>) => {
      state.searchKeywordList = [...state.searchKeywordList, action.payload]
    },
    setIncludeKeyword: (
      state,
      action: PayloadAction<IncludeKeywordItemType[]>,
    ) => {
      state.includeKeywordList = [...action.payload]
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { setSearchKeyword, setIncludeKeyword, setSearchQuery } =
  seacrhSlice.actions
export default seacrhSlice.reducer
