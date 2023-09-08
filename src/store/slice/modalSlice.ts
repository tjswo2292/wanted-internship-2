import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ModalSliceType = {
  isModal: boolean
  childrenIndex: number
}

const initialState: ModalSliceType = {
  isModal: false,
  childrenIndex: -1,
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
  },
})

export const { showAuhtoSearh, keyDown, keyUp } = modalSlice.actions

export default modalSlice.reducer
