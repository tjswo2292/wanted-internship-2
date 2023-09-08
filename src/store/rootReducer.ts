import { combineReducers } from '@reduxjs/toolkit'
import modal from './slice/modalSlice'
import search from './slice/searchSlice'

const reducer = combineReducers({
  modal,
  search,
})

export type ReducerType = ReturnType<typeof reducer>
export default reducer
