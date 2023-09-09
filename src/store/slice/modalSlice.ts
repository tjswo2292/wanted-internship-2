import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ModalSliceType = {
  isModal: boolean
  childrenIndex: number
  childrenElementCount: number
}

const initialState: ModalSliceType = {
  isModal: false,
  childrenIndex: -1,
  childrenElementCount: 0,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showAuhtoSearh: (state) => {
      state.isModal = !state.isModal
    },
    keyDown: (state) => {
      state.childrenIndex = state.childrenIndex + 1
    },
    keyUp: (state) => {
      state.childrenIndex = state.childrenIndex - 1
    },
    keyEnd: (state, action: PayloadAction<number>) => {
      state.childrenIndex = action.payload
    },
    setChildrenEelementCount: (state, action: PayloadAction<number>) => {
      state.childrenElementCount = action.payload
    },
  },
})

export const {
  showAuhtoSearh,
  keyDown,
  keyUp,
  keyEnd,
  setChildrenEelementCount,
} = modalSlice.actions

export default modalSlice.reducer
