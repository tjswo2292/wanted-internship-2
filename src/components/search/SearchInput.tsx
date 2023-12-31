import React, { ChangeEvent, useEffect, useRef } from 'react'

import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

import SubmitButton from './SubmitButton'
import useSearchIcon from './hook/useSearchIcon'
import useDebounce from './hook/useDebounce'
import { publicApi } from '../../api/publicApi'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { showAuhtoSearh } from '../../store/slice/modalSlice'
import {
  setIncludeKeyword,
  setSearchKeyword,
  setSearchQuery,
} from '../../store/slice/searchSlice'
import { localStorageManager } from '../../util/storage'
import { EXPIRE_TIME, MILLI_SECOND } from '../../util/consts'

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const dispatch = useAppDispatch()
  const { searchKeywordList, includeKeywordList, searchQuery } = useAppSelector(
    (state) => state.search,
  )

  const [isShowSearchIcon, changeSearchIconShow] = useSearchIcon()
  const [dispatchDebounce] = useDebounce()

  const handleInputFocus = () => {
    changeSearchIconShow()
    dispatch(showAuhtoSearh())
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(setSearchQuery(value))
  }

  const InputValueInit = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  const resetFormState = () => {
    InputValueInit()
    dispatch(setSearchQuery(''))
  }

  const saveSearchQueryToLocalStorage = () => {
    const date = new Date()
    const cachingTime = date.getTime() / MILLI_SECOND + EXPIRE_TIME

    localStorageManager.GET(searchQuery) === null &&
      localStorageManager.SET(searchQuery, [
        ...includeKeywordList,
        { expireTime: cachingTime },
      ])
  }

  const dispatchSearchKeyword = () => {
    searchKeywordList.some(({ id }) => id === searchQuery) ||
      dispatch(setSearchKeyword({ id: searchQuery, text: searchQuery }))
  }

  const dispatchIncludeKeyword = (dispatchData: object[]) => {
    dispatch(setIncludeKeyword(dispatchData))
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchQuery !== '') {
      saveSearchQueryToLocalStorage()
      dispatchSearchKeyword()
    }

    resetFormState()
  }

  useEffect(() => {
    const fetchSearchWord = async (searchKeyword: string) => {
      console.log('api 호출')
      try {
        const response = await publicApi.GET(searchKeyword)

        searchQuery === '' || dispatchIncludeKeyword(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (localStorageManager.GET(searchQuery) === null) {
      fetchSearchWord(searchQuery)
    } else {
      const now = new Date()

      if (
        now.getTime() / 1000 >
        JSON.parse(`${localStorageManager.GET(searchQuery)}`)?.slice(-1)[0]
          .expireTime
      ) {
        localStorageManager.DELETE(searchQuery)
        fetchSearchWord(searchQuery)
      } else {
        dispatch(
          setIncludeKeyword(
            JSON.parse(`${localStorageManager.GET(searchQuery)}`).slice(0, -1),
          ),
        )
      }
    }
  }, [searchQuery])

  return (
    <Box onSubmit={handleSearchSubmit}>
      <SearchInputWrapper onFocus={handleInputFocus} onBlur={handleInputFocus}>
        {isShowSearchIcon && (
          <InputIconWrapper>
            <InputIcon />
          </InputIconWrapper>
        )}
        <Input
          ref={inputRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatchDebounce(() => handleInputChange(e))
          }}
          type="text"
          placeholder="질환명을 입력해주세요"
        />
        <SubmitBtnWrapper>
          <SubmitButton />
        </SubmitBtnWrapper>
      </SearchInputWrapper>
    </Box>
  )
}

const Box = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 95%;
  height: 100%;
  margin-right: 1rem;
  margin-left: 2.4rem;
  padding: 10px 0;
`
const SearchInputWrapper = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
`
const Input = styled.input`
  width: inherit;
  height: inherit;
  padding-left: 3rem;
  font-size: 2.4rem;

  &::placeholder {
    color: #e1e2e3;
  }
`
const InputIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
`
const InputIcon = styled(BiSearch)`
  width: inherit;
  height: inherit;
`
const SubmitBtnWrapper = styled.div`
  height: inherit;
`
export default SearchInput
