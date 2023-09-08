import React, { useRef } from 'react'

import { styled } from 'styled-components'

import SearchInput from './SearchInput'
import Recommend from './Recommend'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { keyDown, keyUp } from '../../store/slice/modalSlice'

const Main = () => {
  const divRef = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()
  const { isModal } = useAppSelector((state) => state.modal)

  const test = (e: React.KeyboardEvent) => {
    const { key } = e

    switch (key) {
      case 'ArrowDown':
        dispatch(keyDown())
        break
      case 'ArrowUp':
        dispatch(keyUp())
        break
    }
  }

  return (
    <Box onKeyDown={test} ref={divRef}>
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
