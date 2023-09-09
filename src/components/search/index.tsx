import React, { useRef } from 'react'

import { styled } from 'styled-components'

import SearchInput from './SearchInput'
import Recommend from '../recommend'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { keyDown, keyEnd, keyUp } from '../../store/slice/modalSlice'

const Main = () => {
  const divRef = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()
  const { isModal, childrenIndex, childrenElementCount } = useAppSelector(
    (state) => state.modal,
  )

  const handleKeyboardEvent = (e: React.KeyboardEvent) => {
    const { key } = e

    if (childrenElementCount !== 0) {
      switch (key) {
        case 'ArrowDown':
          childrenElementCount - 1 === childrenIndex
            ? dispatch(keyEnd(0))
            : dispatch(keyDown())
          break
        case 'ArrowUp':
          0 === childrenIndex
            ? dispatch(keyEnd(childrenElementCount - 1))
            : dispatch(keyUp())
          break
      }
    }
  }

  return (
    <Box onKeyDown={handleKeyboardEvent} ref={divRef}>
      <SearchInputBox>
        <SearchInput />
      </SearchInputBox>
      {isModal && (
        <RcommendBox>
          <Recommend />
        </RcommendBox>
      )}
    </Box>
  )
}
const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 49rem;
`
const SearchInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 7rem;
  border-radius: 4.2rem;
  background-color: #fff;
`
const RcommendBox = styled(SearchInputBox)`
  position: absolute;
  top: 65px;
  width: 100%;
  height: auto;
  max-height: 30rem;
  margin-top: 1.5rem;
  border-radius: 1.8rem;
`

export default Main
