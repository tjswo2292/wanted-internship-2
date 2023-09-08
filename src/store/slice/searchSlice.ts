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
}

const initialState: SearchSliceType = {
  searchKeywordList: [],
  includeKeywordList: [],
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
  },
})

export const { setSearchKeyword, setIncludeKeyword } = seacrhSlice.actions
export default seacrhSlice.reducer
